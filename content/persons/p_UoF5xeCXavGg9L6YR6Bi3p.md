---
schema: wang-person/v1
id: p_UoF5xeCXavGg9L6YR6Bi3p
status: active
merged_into: null
display_name: 王晐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7dShPAH3MJbhK3DotbXDT2
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aMsGKWLzdzZxufeT1yc7Xm
          claim_id: c_7dShPAH3MJbhK3DotbXDT2
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
          stance: supports
          locator: CBDB:22077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22077）
          source: &a1
            id: s_vDbYAULf9DwxnRKJQDa4W8
            source_type: api_record
            title: 中国历代人物传记资料库：王晐（CBDB 22077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22077&o=json
            external_identifier: CBDB:22077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3sxJREzZQ12BGSbxXSmA1a
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1124年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMQ6eQUHWQPcNZyPUFZ5F7
          claim_id: c_3sxJREzZQ12BGSbxXSmA1a
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Wp1NavnKCyk793U9s2RH6N
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1183年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZdpUPapo5QzJeLWpm6ADuE
          claim_id: c_Wp1NavnKCyk793U9s2RH6N
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qGKjP4D13jfJXETFh2D2m1
        subject_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晐（1124年—1183年），宋人物。籍贯麗水，入仕進士，曾任上輕車都尉、著作佐郎、尚書省右司員外郎。（中国历代人物传记资料库 CBDB 22077）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gniwDkQTSS60XZHG8NlSCg
          claim_id: c_qGKjP4D13jfJXETFh2D2m1
          source_id: s_vDbYAULf9DwxnRKJQDa4W8
          stance: supports
          locator: CBDB:22077
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XUhiMuh6mfQSyNQopuiIBt
        subject_person_id: p_tNenv4FUhMh3QhhSU6ZuWp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UoF5xeCXavGg9L6YR6Bi3p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GknqF-CG3jMlyJuth1Jvez
          claim_id: c_XUhiMuh6mfQSyNQopuiIBt
          source_id: s_Jdp1uTsGLQpEhQ9QDB5zd7
          stance: supports
          locator: CBDB 双向互证（子 王晐 ⇄ 父 王綝）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Jdp1uTsGLQpEhQ9QDB5zd7
            source_type: api_record
            title: 中国历代人物传记资料库：王綝（CBDB 22076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22076&o=json
            external_identifier: CBDB:22076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tNenv4FUhMh3QhhSU6ZuWp
        status: active
        display_name: 王綝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晐 | accepted |
| birth.date | 1124年 | accepted |
| death.date | 1183年 | accepted |
| bio.summary | 王晐（1124年—1183年），宋人物。籍贯麗水，入仕進士，曾任上輕車都尉、著作佐郎、尚書省右司員外郎。（中国历代人物传记资料库 CBDB 22077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tNenv4FUhMh3QhhSU6ZuWp | 王綝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綝（CBDB 22076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22076&o=json)
- [中国历代人物传记资料库：王晐（CBDB 22077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22077&o=json)
