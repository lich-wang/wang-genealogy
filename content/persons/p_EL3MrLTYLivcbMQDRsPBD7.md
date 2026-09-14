---
schema: wang-person/v1
id: p_EL3MrLTYLivcbMQDRsPBD7
status: active
merged_into: null
display_name: 王徽
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EVkkAVBpig8U7xfQ2NEdhy
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9rwoHDCwmqK36mnLv2jYbM
          claim_id: c_EVkkAVBpig8U7xfQ2NEdhy
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
          stance: supports
          locator: CBDB:67717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67717）
          source: &a1
            id: s_5oZPBGWeRCsBq9Mjc7uBoc
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 67717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67717&o=json
            external_identifier: CBDB:67717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MVeNfWpty3h6Rv5THZKXR8
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_smrJnC759YskvTmZzr8kjK
          claim_id: c_MVeNfWpty3h6Rv5THZKXR8
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
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
        id: c_2hmaTAm9g5TcDygdKamovw
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GqCaL5fp1bC4rXswcc2daJ
          claim_id: c_2hmaTAm9g5TcDygdKamovw
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
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
        id: c_c7DzwDdYVN38zUdmuoUv3J
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽（1428年—1510年），明人物。明清進士進士，籍贯南京錦衣衛，身份为書法家、畫家，入仕進士。（中国历代人物传记资料库 CBDB 67717）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zh-aaLxXOc1TyPVJwl1Nlm
          claim_id: c_c7DzwDdYVN38zUdmuoUv3J
          source_id: s_5oZPBGWeRCsBq9Mjc7uBoc
          stance: supports
          locator: CBDB:67717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Kp9WbOYHoo2yR7api3L7rT
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C19wrUmCjzas_PXpx73nuP
          claim_id: c_Kp9WbOYHoo2yR7api3L7rT
          source_id: s_gnZg8SzkQb2YQh5M6kQqn9
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gnZg8SzkQb2YQh5M6kQqn9
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 309940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309940&o=json
            external_identifier: CBDB:309940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mmhxQ3mMMbafknFpAgKiQp
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Y6EwOvw320bCDA9jtYoqTs
        subject_person_id: p_d3nRYvH1xi9VN679vmf6RE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p1Msp5rc3AakyZwdUtPZ0g
          claim_id: c_Y6EwOvw320bCDA9jtYoqTs
          source_id: s_cfus795Deus9EhK2FP4dAW
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cfus795Deus9EhK2FP4dAW
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 309929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309929&o=json
            external_identifier: CBDB:309929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d3nRYvH1xi9VN679vmf6RE
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
    - claim:
        id: c_9VNtAF5I77demlSiynqO6U
        subject_person_id: p_FmRj9f9PFz1KmEFvB1WH6y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kk6ckoi2r-IgBysb6RoJK3
          claim_id: c_9VNtAF5I77demlSiynqO6U
          source_id: s_eF2xzSYrffTjns7MwSQtr5
          stance: supports
          locator: 天順四年進士登科錄:一卷，第二甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eF2xzSYrffTjns7MwSQtr5
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 309918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309918&o=json
            external_identifier: CBDB:309918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FmRj9f9PFz1KmEFvB1WH6y
        status: active
        display_name: 王仲
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_4s50swjj9wIcehqhRH7cdj
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Kde2Bt4UNtZGqHj49jhWnS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lsP4LO_rKK2F27639wjKzt
          claim_id: c_4s50swjj9wIcehqhRH7cdj
          source_id: s_6kOhzZatrUZ2vZW48x7uY9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6kOhzZatrUZ2vZW48x7uY9
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 310018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json
            external_identifier: CBDB:310018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kde2Bt4UNtZGqHj49jhWnS
        status: active
        display_name: 王轍
        merged_into_person_id: null
    - claim:
        id: c_vgXy8LDVPfpLDSFLNKASx-
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-UH5W0wVZd2_Z71L_zc-qS
          claim_id: c_vgXy8LDVPfpLDSFLNKASx-
          source_id: s_qkE1x3TtxEhD9GGQHGNT1C
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qkE1x3TtxEhD9GGQHGNT1C
            source_type: api_record
            title: 中国历代人物传记资料库：王敟（CBDB 310029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json
            external_identifier: CBDB:310029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NKB33yXeWeMFj4Q6mMMgbL
        status: active
        display_name: 王敟
        merged_into_person_id: null
    - claim:
        id: c_BPk1ri_yDhOgFQi5ZgQDHi
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QRVkaZ9KY47HkYUBnnwfzH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NnVuq5PojBZjCyAQxve9te
          claim_id: c_BPk1ri_yDhOgFQi5ZgQDHi
          source_id: s_foxB1iFJlg4TrrvLhHKHEi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_foxB1iFJlg4TrrvLhHKHEi
            source_type: api_record
            title: 中国历代人物传记资料库：王徵（CBDB 310040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310040&o=json
            external_identifier: CBDB:310040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QRVkaZ9KY47HkYUBnnwfzH
        status: active
        display_name: 王徵
        merged_into_person_id: null
    - claim:
        id: c_tpKp5Fp6OONJ8fzSuXnANN
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_btzp3jh3MkdYaEvPPoQCGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gTFsh-TTbWzBrtuAydNUDl
          claim_id: c_tpKp5Fp6OONJ8fzSuXnANN
          source_id: s_H8neZNULG1wrkPqUW8Cf8c
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H8neZNULG1wrkPqUW8Cf8c
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 309996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309996&o=json
            external_identifier: CBDB:309996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_btzp3jh3MkdYaEvPPoQCGE
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_PbU71vu7hjxVkr6HZpGojO
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pEudzMSXppEEBHhRoyJ7FD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4sjGUmgjvpu1KuyxkY1NXp
          claim_id: c_PbU71vu7hjxVkr6HZpGojO
          source_id: s_DFxxgs_AX014p9Ruj4ANuU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DFxxgs_AX014p9Ruj4ANuU
            source_type: api_record
            title: 中国历代人物传记资料库：王敔（CBDB 310007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json
            external_identifier: CBDB:310007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pEudzMSXppEEBHhRoyJ7FD
        status: active
        display_name: 王敔
        merged_into_person_id: null
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| birth.date | 1428年 | accepted |
| death.date | 1510年 | accepted |
| bio.summary | 王徽（1428年—1510年），明人物。明清進士進士，籍贯南京錦衣衛，身份为書法家、畫家，入仕進士。（中国历代人物传记资料库 CBDB 67717） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mmhxQ3mMMbafknFpAgKiQp | 王寧 | accepted |
| ancestors | p_d3nRYvH1xi9VN679vmf6RE | 王嗣宗 | accepted |
| ancestors | p_FmRj9f9PFz1KmEFvB1WH6y | 王仲 | accepted |
| other | p_Kde2Bt4UNtZGqHj49jhWnS | 王轍 | accepted |
| other | p_NKB33yXeWeMFj4Q6mMMgbL | 王敟 | accepted |
| other | p_QRVkaZ9KY47HkYUBnnwfzH | 王徵 | accepted |
| other | p_btzp3jh3MkdYaEvPPoQCGE | 王政 | accepted |
| other | p_pEudzMSXppEEBHhRoyJ7FD | 王敔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敟（CBDB 310029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json)
- [中国历代人物传记资料库：王徽（CBDB 67717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67717&o=json)
- [中国历代人物传记资料库：王寧（CBDB 309940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309940&o=json)
- [中国历代人物传记资料库：王嗣宗（CBDB 309929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309929&o=json)
- [中国历代人物传记资料库：王敔（CBDB 310007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310007&o=json)
- [中国历代人物传记资料库：王轍（CBDB 310018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json)
- [中国历代人物传记资料库：王政（CBDB 309996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309996&o=json)
- [中国历代人物传记资料库：王徵（CBDB 310040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310040&o=json)
- [中国历代人物传记资料库：王仲（CBDB 309918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309918&o=json)
