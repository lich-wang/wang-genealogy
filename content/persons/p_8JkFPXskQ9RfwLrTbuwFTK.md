---
schema: wang-person/v1
id: p_8JkFPXskQ9RfwLrTbuwFTK
status: active
merged_into: null
display_name: 王瑄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aYZhFw4sr5tJKbVqS1Tzy4
        subject_person_id: p_8JkFPXskQ9RfwLrTbuwFTK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xrUbk1EpAxQCmyNNBx1rMc
          claim_id: c_aYZhFw4sr5tJKbVqS1Tzy4
          source_id: s_qQyE27eHDgKdLaLrNAqt78
          stance: supports
          locator: CBDB:262534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262534）
          source: &a1
            id: s_qQyE27eHDgKdLaLrNAqt78
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 262534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262534&o=json
            external_identifier: CBDB:262534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A8xFQ9c1FQpfMFyFzJiDgc
        subject_person_id: p_8JkFPXskQ9RfwLrTbuwFTK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。弘治三年進士，籍贯建水州。（中国历代人物传记资料库 CBDB 262534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HxANez6e96oa266Ci7wKIA
          claim_id: c_A8xFQ9c1FQpfMFyFzJiDgc
          source_id: s_qQyE27eHDgKdLaLrNAqt78
          stance: supports
          locator: CBDB:262534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Sm06NngBYFdPVeazp1Rj-8
        subject_person_id: p_Pmst9sDnARAD4KrAUMx2Lv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8JkFPXskQ9RfwLrTbuwFTK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBRTI2VnJ01t8IACioagcs
          claim_id: c_Sm06NngBYFdPVeazp1Rj-8
          source_id: s_in5XpsglLJ8oT8iFR4vZZL
          stance: supports
          locator: CBDB：兄弟 王璟（67991）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑄 与 王璟 为同胞（CBDB 记「兄」），王璟 之父／母即 王瑄 之父／母。
          source:
            id: s_in5XpsglLJ8oT8iFR4vZZL
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 262534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262534&o=json
            external_identifier: CBDB:262534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pmst9sDnARAD4KrAUMx2Lv
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_IqjSgowj3cBWKr7UxvuxQB
        subject_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8JkFPXskQ9RfwLrTbuwFTK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I6meGwtxmLJ_B3wZ7QtpyR
          claim_id: c_IqjSgowj3cBWKr7UxvuxQB
          source_id: s_in5XpsglLJ8oT8iFR4vZZL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67991 王璟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_in5XpsglLJ8oT8iFR4vZZL
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 262534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262534&o=json
            external_identifier: CBDB:262534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7SVdDrTGrqKd7fHd7JZ1J7
        status: active
        display_name: 王璟
        merged_into_person_id: null
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。弘治三年進士，籍贯建水州。（中国历代人物传记资料库 CBDB 262534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pmst9sDnARAD4KrAUMx2Lv | 王英 | accepted |
| other | p_7SVdDrTGrqKd7fHd7JZ1J7 | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 262534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262534&o=json)
