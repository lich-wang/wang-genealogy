---
schema: wang-person/v1
id: p_2q5oLPYeHNC3ozo65nG5VF
status: active
merged_into: null
display_name: 王叔杲
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uXc4uGim2twDSFMVqvCD6d
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EgFsXJA3VesG54mYSnKZNh
          claim_id: c_uXc4uGim2twDSFMVqvCD6d
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: CBDB:126579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126579）
          source: &a1
            id: s_5FoRMCCjYq81yzD5zvd1kZ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 126579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json
            external_identifier: CBDB:126579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_chyM6J7p6SVU1cnf6tX1fy
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_THEkLG8DGfHU8f936rMf7C
          claim_id: c_chyM6J7p6SVU1cnf6tX1fy
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
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
        id: c_EfJMQMp4vgzrb99PP6GTub
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B2PrcABnAZ22g1aRX7D7gJ
          claim_id: c_EfJMQMp4vgzrb99PP6GTub
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
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
        id: c_mAq1uariqR1n2qbm7uaK75
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲（1517年—1600年），明人物。明清進士進士，籍贯永嘉，入仕進士，曾任參知政事、縣令、知府。（中国历代人物传记资料库 CBDB 126579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qFlgExHyzqIX-KsA_lizpZ
          claim_id: c_mAq1uariqR1n2qbm7uaK75
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: CBDB:126579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HXW4kC4aeHeQ0wTlUqwvZB
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5RESG4AazOp-6uNh6FA8tO
          claim_id: c_HXW4kC4aeHeQ0wTlUqwvZB
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gFygQ7tuxUBRH1guyqGQYP
        status: active
        display_name: 王澈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Bl_JSl1838dhzcrHzSd7uc
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Gsy39WuWh4NG4qrGajpktE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qabaLB6cuYIjFRc5fh1OV4
          claim_id: c_Bl_JSl1838dhzcrHzSd7uc
          source_id: s_PSJyfk2-58WzY84eCbfI6K
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PSJyfk2-58WzY84eCbfI6K
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王叔杲妻)（CBDB 328617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328617&o=json
            external_identifier: CBDB:328617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gsy39WuWh4NG4qrGajpktE
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_DaQaxj7e2AUQ1bKOwfdwN9
        subject_person_id: p_MdGjr9t9d5enBaVmAb7Hoe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y0cjIYyORNOFrVaktS1RGQ
          claim_id: c_DaQaxj7e2AUQ1bKOwfdwN9
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MdGjr9t9d5enBaVmAb7Hoe
        status: active
        display_name: 王封
        merged_into_person_id: null
    - claim:
        id: c_DbUu4AUM7dVEJ9j36yJS_c
        subject_person_id: p_GhhQAsKsPY39RTFcJNMzy7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8XQjl7JG_f-OPD8fNDbspt
          claim_id: c_DbUu4AUM7dVEJ9j36yJS_c
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GhhQAsKsPY39RTFcJNMzy7
        status: active
        display_name: 王鉦
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ju9R6MK2R-gn7LkryRwAB5
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HvrFGZd9ssdoXZvL77JxCH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L54OlJ0idZB8Dbknyvb0lA
          claim_id: c_ju9R6MK2R-gn7LkryRwAB5
          source_id: s_W5L9791aZMz7UBjKQaAsjr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126579 王叔杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_W5L9791aZMz7UBjKQaAsjr
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 328621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json
            external_identifier: CBDB:328621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HvrFGZd9ssdoXZvL77JxCH
        status: active
        display_name: 王叔果
        merged_into_person_id: null
    - claim:
        id: c_8Xa93uCsg6nxIDZVZyYOXc
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g9di9N7eNMAQungG7MFVQX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34oCQ8SjpF5jB2_B1OyJ5m
          claim_id: c_8Xa93uCsg6nxIDZVZyYOXc
          source_id: s_FcBVgddWDwtYXVCWR02iX2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126579 王叔杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FcBVgddWDwtYXVCWR02iX2
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 328622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json
            external_identifier: CBDB:328622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9di9N7eNMAQungG7MFVQX
        status: active
        display_name: 王叔本
        merged_into_person_id: null
    - claim:
        id: c_eIgDsRuUrdTe5XIC9g0KAw
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sN9FriBxSGp1pjQ5sQLWhp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8G9u0TQeKQ2l15GIdnPV5
          claim_id: c_eIgDsRuUrdTe5XIC9g0KAw
          source_id: s_RWtGdjvczb2SztWRfXevt6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126579 王叔杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RWtGdjvczb2SztWRfXevt6
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 328620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328620&o=json
            external_identifier: CBDB:328620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sN9FriBxSGp1pjQ5sQLWhp
        status: active
        display_name: 王叔懋
        merged_into_person_id: null
---

# 王叔杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔杲 | accepted |
| birth.date | 1517年 | accepted |
| death.date | 1600年 | accepted |
| bio.summary | 王叔杲（1517年—1600年），明人物。明清進士進士，籍贯永嘉，入仕進士，曾任參知政事、縣令、知府。（中国历代人物传记资料库 CBDB 126579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gFygQ7tuxUBRH1guyqGQYP | 王澈 | accepted |
| spouses | p_Gsy39WuWh4NG4qrGajpktE | 吳氏 | accepted |
| ancestors | p_MdGjr9t9d5enBaVmAb7Hoe | 王封 | accepted |
| ancestors | p_GhhQAsKsPY39RTFcJNMzy7 | 王鉦 | accepted |
| other | p_HvrFGZd9ssdoXZvL77JxCH | 王叔果 | accepted |
| other | p_g9di9N7eNMAQungG7MFVQX | 王叔本 | accepted |
| other | p_sN9FriBxSGp1pjQ5sQLWhp | 王叔懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔本（CBDB 328622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json)
- [中国历代人物传记资料库：王叔杲（CBDB 126579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json)
- [中国历代人物传记资料库：王叔果（CBDB 328621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328621&o=json)
- [中国历代人物传记资料库：王叔懋（CBDB 328620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328620&o=json)
- [中国历代人物传记资料库：吳氏(王叔杲妻)（CBDB 328617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328617&o=json)
