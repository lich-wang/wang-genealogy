---
schema: wang-person/v1
id: p_MrefbbzDzYb6e1FBHciHg1
status: active
merged_into: null
display_name: 王瑀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8W8KSAvX3ceESpS63M6Mwq
        subject_person_id: p_MrefbbzDzYb6e1FBHciHg1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_obJCZuG1uDnhnyQa9Cibw6
          claim_id: c_8W8KSAvX3ceESpS63M6Mwq
          source_id: s_vEGCFHtnruDVc58PvpU6Sa
          stance: supports
          locator: CBDB:262533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262533）
          source: &a1
            id: s_vEGCFHtnruDVc58PvpU6Sa
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 262533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262533&o=json
            external_identifier: CBDB:262533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zD3V7mMPZk523ucETZ7X41
        subject_person_id: p_MrefbbzDzYb6e1FBHciHg1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑀，明人物。弘治三年進士，籍贯建水州。（中国历代人物传记资料库 CBDB 262533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nHLtHZa8jfhGrowDmUmE8J
          claim_id: c_zD3V7mMPZk523ucETZ7X41
          source_id: s_vEGCFHtnruDVc58PvpU6Sa
          stance: supports
          locator: CBDB:262533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NKMgbbAZWZ5Uij_xDUlRFb
        subject_person_id: p_Pmst9sDnARAD4KrAUMx2Lv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MrefbbzDzYb6e1FBHciHg1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_utx17xb-0r7eKwttd4kUGS
          claim_id: c_NKMgbbAZWZ5Uij_xDUlRFb
          source_id: s_MNrxBDRQS56lDof8Hf-zyi
          stance: supports
          locator: CBDB：兄弟 王璟（67991）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王璟 为同胞（CBDB 记「弟」），王璟 之父／母即 王瑀 之父／母。
          source:
            id: s_MNrxBDRQS56lDof8Hf-zyi
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 262533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262533&o=json
            external_identifier: CBDB:262533
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
        id: c_9L2RPFWIyXLnIWMnq99OnA
        subject_person_id: p_7SVdDrTGrqKd7fHd7JZ1J7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MrefbbzDzYb6e1FBHciHg1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9PwYiXUfAq5uXYJajIwTOJ
          claim_id: c_9L2RPFWIyXLnIWMnq99OnA
          source_id: s_MNrxBDRQS56lDof8Hf-zyi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67991 王璟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MNrxBDRQS56lDof8Hf-zyi
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 262533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262533&o=json
            external_identifier: CBDB:262533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7SVdDrTGrqKd7fHd7JZ1J7
        status: active
        display_name: 王璟
        merged_into_person_id: null
---

# 王瑀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑀 | accepted |
| bio.summary | 王瑀，明人物。弘治三年進士，籍贯建水州。（中国历代人物传记资料库 CBDB 262533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Pmst9sDnARAD4KrAUMx2Lv | 王英 | accepted |
| other | p_7SVdDrTGrqKd7fHd7JZ1J7 | 王璟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑀（CBDB 262533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262533&o=json)
