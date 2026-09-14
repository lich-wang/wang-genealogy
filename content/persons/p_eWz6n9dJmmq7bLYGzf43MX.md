---
schema: wang-person/v1
id: p_eWz6n9dJmmq7bLYGzf43MX
status: active
merged_into: null
display_name: 王高
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_epveM5SxdjXmeYXEBFDbog
        subject_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FDX3t2uWL4i8WgARCi7Uze
          claim_id: c_epveM5SxdjXmeYXEBFDbog
          source_id: s_En37JsZXZdpNPmAGsgyvDS
          stance: supports
          locator: CBDB:297083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297083）
          source: &a1
            id: s_En37JsZXZdpNPmAGsgyvDS
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 297083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json
            external_identifier: CBDB:297083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9RvG6KFYgfRF646bH7qeRK
        subject_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王高，明人物。嘉靖十四年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 297083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O990iVVYR7-vurfaQs5NEJ
          claim_id: c_9RvG6KFYgfRF646bH7qeRK
          source_id: s_En37JsZXZdpNPmAGsgyvDS
          stance: supports
          locator: CBDB:297083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qFh2K00dAwmR6T5Bg0pC2x
        subject_person_id: p_GwTmgLY74DWW5r4UnQF1Tu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dhYHe_P0b8S3P5tp5t8Am
          claim_id: c_qFh2K00dAwmR6T5Bg0pC2x
          source_id: s_UhRAciwCDm-BOe98otdIqM
          stance: supports
          locator: CBDB：兄弟 王喬齡（202941）之父／母 王椿
          quotation: null
          interpretation_note: 由兄弟关系推断：王高 与 王喬齡 为同胞（CBDB 记「兄」），王喬齡 之父／母即 王高 之父／母。
          source:
            id: s_UhRAciwCDm-BOe98otdIqM
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 297083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json
            external_identifier: CBDB:297083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GwTmgLY74DWW5r4UnQF1Tu
        status: active
        display_name: 王椿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2ZSuRLhOF4rWxbl9mclBIl
        subject_person_id: p_DPKdYaX4f6yTudovTApGHk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2p20EN5784nXem4y7oLrEI
          claim_id: c_2ZSuRLhOF4rWxbl9mclBIl
          source_id: s_UhRAciwCDm-BOe98otdIqM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202941 王喬齡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UhRAciwCDm-BOe98otdIqM
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 297083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json
            external_identifier: CBDB:297083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DPKdYaX4f6yTudovTApGHk
        status: active
        display_name: 王喬齡
        merged_into_person_id: null
    - claim:
        id: c_ImuCjSbYgKkMeGeyt5JGG9
        subject_person_id: p_JE4JHCNRPza84DMSHaNQDc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eWz6n9dJmmq7bLYGzf43MX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mhJvbx0WnqYrJp-N-Lo4mE
          claim_id: c_ImuCjSbYgKkMeGeyt5JGG9
          source_id: s_UhRAciwCDm-BOe98otdIqM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203412 王嵩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UhRAciwCDm-BOe98otdIqM
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 297083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json
            external_identifier: CBDB:297083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JE4JHCNRPza84DMSHaNQDc
        status: active
        display_name: 王嵩
        merged_into_person_id: null
---

# 王高

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王高 | accepted |
| bio.summary | 王高，明人物。嘉靖十四年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 297083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GwTmgLY74DWW5r4UnQF1Tu | 王椿 | accepted |
| other | p_DPKdYaX4f6yTudovTApGHk | 王喬齡 | accepted |
| other | p_JE4JHCNRPza84DMSHaNQDc | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王高（CBDB 297083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297083&o=json)
