---
schema: wang-person/v1
id: p_4BLXyZCenGFGTpbxvtENEs
status: active
merged_into: null
display_name: 王域
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vLdQbVTnzRDAYwxDxi2ZFL
        subject_person_id: p_4BLXyZCenGFGTpbxvtENEs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GbWAhPHdKuQzUL6k1B7vbr
          claim_id: c_vLdQbVTnzRDAYwxDxi2ZFL
          source_id: s_MV372bAX94mK6JEKiqK96v
          stance: supports
          locator: CBDB:318885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318885）
          source: &a1
            id: s_MV372bAX94mK6JEKiqK96v
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 318885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318885&o=json
            external_identifier: CBDB:318885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.034Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LwKTPHQD34JGEykFas1TNb
        subject_person_id: p_4BLXyZCenGFGTpbxvtENEs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王域，明人物。天順四年進士，籍贯許州。（中国历代人物传记资料库 CBDB 318885）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bURjSh9W9rk80efxGuOc-T
          claim_id: c_LwKTPHQD34JGEykFas1TNb
          source_id: s_MV372bAX94mK6JEKiqK96v
          stance: supports
          locator: CBDB:318885
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7619yO9Bq-ieKbocveJJ8T
        subject_person_id: p_uKtEKuzL33Ns79oVfb6c8x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4BLXyZCenGFGTpbxvtENEs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ikLjeCLVqUN_pdk7PQzWfL
          claim_id: c_7619yO9Bq-ieKbocveJJ8T
          source_id: s_RE_9jZkeCov6vuMCtZEy1b
          stance: supports
          locator: CBDB：兄弟 王塤（198806）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王域 与 王塤 为同胞（CBDB 记「兄」），王塤 之父／母即 王域 之父／母。
          source:
            id: s_RE_9jZkeCov6vuMCtZEy1b
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 318885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318885&o=json
            external_identifier: CBDB:318885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uKtEKuzL33Ns79oVfb6c8x
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PGYF_-O_ldxWW7EKLiD5Lv
        subject_person_id: p_4BLXyZCenGFGTpbxvtENEs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Mq4DjrJD3kuD51C35m7MXJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MWyA6nXmpfR1_f4MMyGBYS
          claim_id: c_PGYF_-O_ldxWW7EKLiD5Lv
          source_id: s_RE_9jZkeCov6vuMCtZEy1b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198806 王塤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RE_9jZkeCov6vuMCtZEy1b
            source_type: api_record
            title: 中国历代人物传记资料库：王域（CBDB 318885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318885&o=json
            external_identifier: CBDB:318885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Mq4DjrJD3kuD51C35m7MXJ
        status: active
        display_name: 王塤
        merged_into_person_id: null
---

# 王域

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王域 | accepted |
| bio.summary | 王域，明人物。天順四年進士，籍贯許州。（中国历代人物传记资料库 CBDB 318885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uKtEKuzL33Ns79oVfb6c8x | 王榮 | accepted |
| other | p_Mq4DjrJD3kuD51C35m7MXJ | 王塤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王域（CBDB 318885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318885&o=json)
