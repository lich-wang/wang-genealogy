---
schema: wang-person/v1
id: p_JFaVuR7J1VpwQj6ZwnAgVN
status: active
merged_into: null
display_name: 王僧護
cbdb_id: 151430
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CbArH2gPNJPZ1vxbE5cQyn
        subject_person_id: p_JFaVuR7J1VpwQj6ZwnAgVN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧護，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151430 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_DYZV5yo-6C2E7QAb_lKwM-
          claim_id: c_CbArH2gPNJPZ1vxbE5cQyn
          source_id: s_4k9aEHved8UZxZnjgLHgQ9
          stance: supports
          locator: CBDB:151430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_4k9aEHved8UZxZnjgLHgQ9
            source_type: api_record
            title: 中国历代人物传记资料库：王僧護（CBDB 151430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151430&o=json
            external_identifier: CBDB:151430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4T4ZNxAuwLLwXXiHoCVZyi
        subject_person_id: p_JFaVuR7J1VpwQj6ZwnAgVN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧護
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PbpWGyJGGtzBtvi39ywcu1
          claim_id: c_4T4ZNxAuwLLwXXiHoCVZyi
          source_id: s_4k9aEHved8UZxZnjgLHgQ9
          stance: supports
          locator: CBDB:151430
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_4k9aEHved8UZxZnjgLHgQ9
            source_type: api_record
            title: 中国历代人物传记资料库：王僧護（CBDB 151430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151430&o=json
            external_identifier: CBDB:151430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0uMZ2cqd0Twlf1T1czIYFe
        subject_person_id: p_Qju67ahEiuJqKQGrjA4w6B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JFaVuR7J1VpwQj6ZwnAgVN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XQtHSqr5q0h2Gti-CS-5mG
          claim_id: c_0uMZ2cqd0Twlf1T1czIYFe
          source_id: s_DjECFUtiuZf73kK6pGREps
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 91：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DjECFUtiuZf73kK6pGREps
            source_type: api_record
            title: 中国历代人物传记资料库：王庭芝（CBDB 140365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json
            external_identifier: CBDB:140365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Qju67ahEiuJqKQGrjA4w6B
        status: active
        display_name: 王庭芝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王僧護

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王僧護，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151430 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王僧護 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Qju67ahEiuJqKQGrjA4w6B | 王庭芝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僧護（CBDB 151430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151430&o=json)
- [中国历代人物传记资料库：王庭芝（CBDB 140365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140365&o=json)
