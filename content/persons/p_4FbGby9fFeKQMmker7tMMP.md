---
schema: wang-person/v1
id: p_4FbGby9fFeKQMmker7tMMP
status: active
merged_into: null
display_name: 王珩
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qn8Sg4DHM4hK1HbWS4uE5P
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mfGcXguHjpTBmweLKzqWsB
          claim_id: c_qn8Sg4DHM4hK1HbWS4uE5P
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: CBDB:126638
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126638）
          source: &a1
            id: s_MUxq2FyJ4QRyAx99MTCU4A
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 126638）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json
            external_identifier: CBDB:126638
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PRmwZvhMyJapajhZff9SJ2
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩，明人物。明清進士進士，籍贯趙州，入仕進士。（中国历代人物传记资料库 CBDB 126638）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E7T650XJURQOViSqnEcFHY
          claim_id: c_PRmwZvhMyJapajhZff9SJ2
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: CBDB:126638
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6NT56CaO4mSUIh9ohCmHin
        subject_person_id: p_f7t9X2kJV7EUtQDpi6JhvW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hX4-w4ITQ9FCfwCGtBCj3
          claim_id: c_6NT56CaO4mSUIh9ohCmHin
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f7t9X2kJV7EUtQDpi6JhvW
        status: active
        display_name: 王惟政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Z9Hlf7oj7dssCCarSFaIRz
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VFPXej8xVczUGDDcED8GoL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iynOQc8x97jyia2mHUeV71
          claim_id: c_Z9Hlf7oj7dssCCarSFaIRz
          source_id: s_aWweyHrjXQ3LfAzwVFY3xX
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aWweyHrjXQ3LfAzwVFY3xX
            source_type: api_record
            title: 中国历代人物传记资料库：牟氏(王珩妻)（CBDB 250450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250450&o=json
            external_identifier: CBDB:250450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VFPXej8xVczUGDDcED8GoL
        status: active
        display_name: 牟氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_XuET9YqkCUvX67n1AtMo2a
        subject_person_id: p_j1wUhScLR6C7kS8y5jb1Dh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HA6AwfTqgryaToBvgbSNNh
          claim_id: c_XuET9YqkCUvX67n1AtMo2a
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j1wUhScLR6C7kS8y5jb1Dh
        status: active
        display_name: 王成甫
        merged_into_person_id: null
    - claim:
        id: c_pRFxPcT9hMkmSWDx1gAOqX
        subject_person_id: p_5irbCXc8aiHfE8e3NuCuzA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qRV3UNdx1MjKJqFJgpL8sH
          claim_id: c_pRFxPcT9hMkmSWDx1gAOqX
          source_id: s_MUxq2FyJ4QRyAx99MTCU4A
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百七十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5irbCXc8aiHfE8e3NuCuzA
        status: active
        display_name: 王翥
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Jb4XOKkRRm2Qkcp8Xi4gyy
        subject_person_id: p_4CiJFoEfv4MDKNaJyWGj49
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4FbGby9fFeKQMmker7tMMP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ulSnTIyuplYlBK55YN4Ki-
          claim_id: c_Jb4XOKkRRm2Qkcp8Xi4gyy
          source_id: s_TFpwkpQJuRww-UNXgpxD77
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TFpwkpQJuRww-UNXgpxD77
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 250461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250461&o=json
            external_identifier: CBDB:250461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4CiJFoEfv4MDKNaJyWGj49
        status: active
        display_name: 王璠
        merged_into_person_id: null
    - claim:
        id: c_9Zn2tj3uc75RGXKs5Ezo91
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6GkiAoxDqABDWgMhLPJXhp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Clx5r0riMMgZyNLpIC4GWC
          claim_id: c_9Zn2tj3uc75RGXKs5Ezo91
          source_id: s_UbCGDhoXSRi8o9a7kP7qW-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UbCGDhoXSRi8o9a7kP7qW-
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 250452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250452&o=json
            external_identifier: CBDB:250452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6GkiAoxDqABDWgMhLPJXhp
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_qjUGTa3v9YxEbXuBwCDHoo
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9GqYDwUT1GRiLwK1k1Mib9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jNilYcEMIqEgb8GmOhRlY4
          claim_id: c_qjUGTa3v9YxEbXuBwCDHoo
          source_id: s_N75947SeIaM3XaeGb1-IPJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N75947SeIaM3XaeGb1-IPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 250456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250456&o=json
            external_identifier: CBDB:250456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9GqYDwUT1GRiLwK1k1Mib9
        status: active
        display_name: 王璣
        merged_into_person_id: null
    - claim:
        id: c_LplrBo0MSAEJWahqVz9Vky
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l4XiX2yi2gnZt9-Hh5ImzE
          claim_id: c_LplrBo0MSAEJWahqVz9Vky
          source_id: s_vCjRQFItXMxjZgCzFVooNl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vCjRQFItXMxjZgCzFVooNl
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 250460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json
            external_identifier: CBDB:250460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EwHhYnCFWyzEp1Vg7Ci5fB
        status: active
        display_name: 王珙
        merged_into_person_id: null
    - claim:
        id: c_yDW6MeT_JMT4L4NQEBp40o
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Fy3r2A3KPWx1RETDQshWb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pjKtXMjBofweHh358je8hc
          claim_id: c_yDW6MeT_JMT4L4NQEBp40o
          source_id: s_fj1PBPcWIOF472Pyd2yNmn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fj1PBPcWIOF472Pyd2yNmn
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 250455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json
            external_identifier: CBDB:250455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fy3r2A3KPWx1RETDQshWb8
        status: active
        display_name: 王瑄
        merged_into_person_id: null
    - claim:
        id: c_ymBxzbKbU6gfbqg6jQoDd4
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NDMKBG4yUXHkQAQFh6Q82w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_drGzYQExDUNaJezTYARA1-
          claim_id: c_ymBxzbKbU6gfbqg6jQoDd4
          source_id: s_AdvzUgAJTiiHqlKFZxU_c5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AdvzUgAJTiiHqlKFZxU_c5
            source_type: api_record
            title: 中国历代人物传记资料库：王瓃（CBDB 250459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json
            external_identifier: CBDB:250459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NDMKBG4yUXHkQAQFh6Q82w
        status: active
        display_name: 王瓃
        merged_into_person_id: null
    - claim:
        id: c_OiVAcdrmAxZQXJrIrvLvpR
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YRqt1snj1duk1df2ZTawrQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hW8UA14p4ChEW64XRQFv8g
          claim_id: c_OiVAcdrmAxZQXJrIrvLvpR
          source_id: s_X8qBa73IjmeUOWzZrQfuBS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X8qBa73IjmeUOWzZrQfuBS
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 250457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250457&o=json
            external_identifier: CBDB:250457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YRqt1snj1duk1df2ZTawrQ
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_Q-JLkLZWvyfeeTJiPfDljt
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dUmLyCykqJ6DShm19k8X72
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xcorwKEPh-GkllwLQKb4ET
          claim_id: c_Q-JLkLZWvyfeeTJiPfDljt
          source_id: s_AFKNQMf2Xpp5rawx5svp5e
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AFKNQMf2Xpp5rawx5svp5e
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 250458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250458&o=json
            external_identifier: CBDB:250458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dUmLyCykqJ6DShm19k8X72
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_rQw9KOtKQw1TYBQ_3YepZ3
        subject_person_id: p_4FbGby9fFeKQMmker7tMMP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hmRYd5AgCCYrVeM4nez3uw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHwDDdLwJWC96z4AjBscA9
          claim_id: c_rQw9KOtKQw1TYBQ_3YepZ3
          source_id: s_pbNDfXOfrZA72XhgDFbvg7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126638 王珩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pbNDfXOfrZA72XhgDFbvg7
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 250453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250453&o=json
            external_identifier: CBDB:250453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmRYd5AgCCYrVeM4nez3uw
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| bio.summary | 王珩，明人物。明清進士進士，籍贯趙州，入仕進士。（中国历代人物传记资料库 CBDB 126638） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f7t9X2kJV7EUtQDpi6JhvW | 王惟政 | accepted |
| spouses | p_VFPXej8xVczUGDDcED8GoL | 牟氏 | accepted |
| ancestors | p_j1wUhScLR6C7kS8y5jb1Dh | 王成甫 | accepted |
| ancestors | p_5irbCXc8aiHfE8e3NuCuzA | 王翥 | accepted |
| other | p_4CiJFoEfv4MDKNaJyWGj49 | 王璠 | accepted |
| other | p_6GkiAoxDqABDWgMhLPJXhp | 王瑛 | accepted |
| other | p_9GqYDwUT1GRiLwK1k1Mib9 | 王璣 | accepted |
| other | p_EwHhYnCFWyzEp1Vg7Ci5fB | 王珙 | accepted |
| other | p_Fy3r2A3KPWx1RETDQshWb8 | 王瑄 | accepted |
| other | p_NDMKBG4yUXHkQAQFh6Q82w | 王瓃 | accepted |
| other | p_YRqt1snj1duk1df2ZTawrQ | 王琮 | accepted |
| other | p_dUmLyCykqJ6DShm19k8X72 | 王琳 | accepted |
| other | p_hmRYd5AgCCYrVeM4nez3uw | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：牟氏(王珩妻)（CBDB 250450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250450&o=json)
- [中国历代人物传记资料库：王琮（CBDB 250457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250457&o=json)
- [中国历代人物传记资料库：王璠（CBDB 250461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250461&o=json)
- [中国历代人物传记资料库：王珙（CBDB 250460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250460&o=json)
- [中国历代人物传记资料库：王珩（CBDB 126638）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126638&o=json)
- [中国历代人物传记资料库：王璣（CBDB 250456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250456&o=json)
- [中国历代人物传记资料库：王瓃（CBDB 250459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250459&o=json)
- [中国历代人物传记资料库：王琳（CBDB 250458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250458&o=json)
- [中国历代人物传记资料库：王璽（CBDB 250453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250453&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 250455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250455&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 250452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250452&o=json)
