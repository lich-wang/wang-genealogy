---
schema: wang-person/v1
id: p_VmtHWW9HBMcRBoxoJTE23J
status: active
merged_into: null
display_name: 王璲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QDs4WGEKVVeE1W8YthF5uL
        subject_person_id: p_VmtHWW9HBMcRBoxoJTE23J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TNN6qXPHifRA2FB3QwPxrT
          claim_id: c_QDs4WGEKVVeE1W8YthF5uL
          source_id: s_qqr9QM9g23kENMdnmyAkwe
          stance: supports
          locator: CBDB:282502
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282502）
          source: &a1
            id: s_qqr9QM9g23kENMdnmyAkwe
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 282502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json
            external_identifier: CBDB:282502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nTQad1Bw2myGD6pNXmGQN2
        subject_person_id: p_VmtHWW9HBMcRBoxoJTE23J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璲，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282502）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GUZR6xj6fv7uQ3uGS0ea76
          claim_id: c_nTQad1Bw2myGD6pNXmGQN2
          source_id: s_qqr9QM9g23kENMdnmyAkwe
          stance: supports
          locator: CBDB:282502
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NvNY4F3-CGSRj5oaP6a3Fs
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VmtHWW9HBMcRBoxoJTE23J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNkB5ShZOneMjP4DDew8nm
          claim_id: c_NvNY4F3-CGSRj5oaP6a3Fs
          source_id: s_Bm1r15S80BFM89pkE2SpG9
          stance: supports
          locator: CBDB：兄弟 王瑄（126752）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王璲 与 王瑄 为同胞（CBDB 记「兄」），王瑄 之父／母即 王璲 之父／母。
          source:
            id: s_Bm1r15S80BFM89pkE2SpG9
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 282502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json
            external_identifier: CBDB:282502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B_D4LHHjWpOLlGs1eYlaOP
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VmtHWW9HBMcRBoxoJTE23J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pwkpW0bYNz3tRJNFiwX4nA
          claim_id: c_B_D4LHHjWpOLlGs1eYlaOP
          source_id: s_Bm1r15S80BFM89pkE2SpG9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bm1r15S80BFM89pkE2SpG9
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 282502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json
            external_identifier: CBDB:282502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CvexZGJpSfjjALu2joPK1N
        status: active
        display_name: 王瑄
        merged_into_person_id: null
---

# 王璲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璲 | accepted |
| bio.summary | 王璲，明人物。正德十二年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 282502） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ws6vwZFsXZUpBYjSrkcdGJ | 王言 | accepted |
| other | p_CvexZGJpSfjjALu2joPK1N | 王瑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璲（CBDB 282502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json)
