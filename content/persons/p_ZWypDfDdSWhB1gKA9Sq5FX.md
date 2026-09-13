---
schema: wang-person/v1
id: p_ZWypDfDdSWhB1gKA9Sq5FX
status: active
merged_into: null
display_name: 王輔義
cbdb_id: 153076
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9YZVExHtTBNsUCkdUd2z9
        subject_person_id: p_ZWypDfDdSWhB1gKA9Sq5FX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔義，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 153076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QQVNsh6z0gW7jCZX8InBYO
          claim_id: c_E9YZVExHtTBNsUCkdUd2z9
          source_id: s_5Db6Lp3Q9t2deywVDZYdkq
          stance: supports
          locator: CBDB:153076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5Db6Lp3Q9t2deywVDZYdkq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔義（CBDB 153076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153076&o=json
            external_identifier: CBDB:153076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9wDM7FKnbxA3GETKU65Ged
        subject_person_id: p_ZWypDfDdSWhB1gKA9Sq5FX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EgfQEvYp3CcbkE1JhgrTBy
          claim_id: c_9wDM7FKnbxA3GETKU65Ged
          source_id: s_5Db6Lp3Q9t2deywVDZYdkq
          stance: supports
          locator: CBDB:153076
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_P3y08hQk2ZTziKHnyPxo2E
        subject_person_id: p_ZWypDfDdSWhB1gKA9Sq5FX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnGaouPfqefCGE1Y4ioHiB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMI5aCb-P8uCgfqZyiMK1d
          claim_id: c_P3y08hQk2ZTziKHnyPxo2E
          source_id: s_Ld6eAaNDM2h9orwWezqoBe
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 502：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ld6eAaNDM2h9orwWezqoBe
            source_type: api_record
            title: 中国历代人物传记资料库：王承法（CBDB 140768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140768&o=json
            external_identifier: CBDB:140768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hnGaouPfqefCGE1Y4ioHiB
        status: active
        display_name: 王承法
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王輔義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王輔義，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 153076） | accepted |
| name.primary | 王輔義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hnGaouPfqefCGE1Y4ioHiB | 王承法 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承法（CBDB 140768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140768&o=json)
- [中国历代人物传记资料库：王輔義（CBDB 153076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153076&o=json)
