---
schema: wang-person/v1
id: p_RxU5daA7Pb2tQNaYot8QGE
status: active
merged_into: null
display_name: 王術
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SZMDRH62urrwGZ6SD445yY
        subject_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王術
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GFMzdA61fmoSRnpL8zDGhk
          claim_id: c_SZMDRH62urrwGZ6SD445yY
          source_id: s_NHh8KUdFfDXqAWqWVrgED1
          stance: supports
          locator: CBDB:200545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200545）
          source: &a1
            id: s_NHh8KUdFfDXqAWqWVrgED1
            source_type: api_record
            title: 中国历代人物传记资料库：王術（CBDB 200545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200545&o=json
            external_identifier: CBDB:200545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yzW7L99hUc5idmaXG8FEwm
        subject_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1462年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1opC3LLDDwf9UFuTj3CNDX
          claim_id: c_yzW7L99hUc5idmaXG8FEwm
          source_id: s_NHh8KUdFfDXqAWqWVrgED1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6pBLM3Gs49yGXi68J43fo7
        subject_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王術（生于1462年），明人物。明清進士進士，籍贯慈溪，入仕進士，曾任監察御史、巡按、知縣。（中国历代人物传记资料库 CBDB 200545）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zxeR1VwNCykfo0hF4Z66oh
          claim_id: c_6pBLM3Gs49yGXi68J43fo7
          source_id: s_NHh8KUdFfDXqAWqWVrgED1
          stance: supports
          locator: CBDB:200545
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h54Nn9QPsVuyEuHhW0J-s9
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F72Yh8z5ZOfuHPJZziiXvu
          claim_id: c_h54Nn9QPsVuyEuHhW0J-s9
          source_id: s_5oMQQ6J7D2xG5HP2PqWFcF
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第九十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5oMQQ6J7D2xG5HP2PqWFcF
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 259539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259539&o=json
            external_identifier: CBDB:259539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_isvcw6EfQic2NdXZzwfKeT
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Fk4K7LQugmpnXpKJTkAuEJ
        subject_person_id: p_fMLAPE2ioyP2h5eC9D65Cw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_epDWXFSTEob5hFBl1JO9nr
          claim_id: c_Fk4K7LQugmpnXpKJTkAuEJ
          source_id: s_qN2DCYhPjpxKVCew275tka
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第九十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qN2DCYhPjpxKVCew275tka
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 259538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259538&o=json
            external_identifier: CBDB:259538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.462Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fMLAPE2ioyP2h5eC9D65Cw
        status: active
        display_name: 王鎰
        merged_into_person_id: null
    - claim:
        id: c_3G7EX3lKf8oAFDE-DvRd1v
        subject_person_id: p_muzSurN3jFSU41spiQajYN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_juvH53hdPLOFN_Yo45OP9-
          claim_id: c_3G7EX3lKf8oAFDE-DvRd1v
          source_id: s_pBk538th3gJ4P2ZVHY6ThC
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第九十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pBk538th3gJ4P2ZVHY6ThC
            source_type: api_record
            title: 中国历代人物传记资料库：王青（CBDB 259537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259537&o=json
            external_identifier: CBDB:259537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_muzSurN3jFSU41spiQajYN
        status: active
        display_name: 王青
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_6q7HdEBXXmmwqAvR8M7_G_
        subject_person_id: p_9f3JMr7vZQNLdADD3ztWtm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TH53JQJn2rtODAnxs0hmeg
          claim_id: c_6q7HdEBXXmmwqAvR8M7_G_
          source_id: s_vzES0KFt7yBHBsCeOoULUN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vzES0KFt7yBHBsCeOoULUN
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 259544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json
            external_identifier: CBDB:259544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9f3JMr7vZQNLdADD3ztWtm
        status: active
        display_name: 王棨
        merged_into_person_id: null
    - claim:
        id: c_12vbDx6zuBmPoSYQpger7l
        subject_person_id: p_AuCKU8vCgLCLaoyApF5P6w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aLp1jj7rbIuA5HRwxKHQNh
          claim_id: c_12vbDx6zuBmPoSYQpger7l
          source_id: s_GtDoLTqA4D-AdfeTegpbLw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GtDoLTqA4D-AdfeTegpbLw
            source_type: api_record
            title: 中国历代人物传记资料库：王梵（CBDB 259548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json
            external_identifier: CBDB:259548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AuCKU8vCgLCLaoyApF5P6w
        status: active
        display_name: 王梵
        merged_into_person_id: null
    - claim:
        id: c_OkC73KR_6k5VwO9ko2snw4
        subject_person_id: p_LSUvpomfGMjUH6Tg8wQ7ya
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rk02flhnx92HyHuvf1AYkZ
          claim_id: c_OkC73KR_6k5VwO9ko2snw4
          source_id: s_Ge0l9MtrtheRyHlk1k0_J9
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ge0l9MtrtheRyHlk1k0_J9
            source_type: api_record
            title: 中国历代人物传记资料库：王彩（CBDB 259542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json
            external_identifier: CBDB:259542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LSUvpomfGMjUH6Tg8wQ7ya
        status: active
        display_name: 王彩
        merged_into_person_id: null
    - claim:
        id: c_Ph-D8d9Bs8uWPQVavA6pZE
        subject_person_id: p_LSk2pKsUaXXBC4m85PfwoB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MyZAwU5irTUtNILGWxyXHq
          claim_id: c_Ph-D8d9Bs8uWPQVavA6pZE
          source_id: s_xkw3ds2cdTvQ-_YZdLVnUs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xkw3ds2cdTvQ-_YZdLVnUs
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 259543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259543&o=json
            external_identifier: CBDB:259543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LSk2pKsUaXXBC4m85PfwoB
        status: active
        display_name: 王椿
        merged_into_person_id: null
    - claim:
        id: c_d3zQ-TF5-il1c08QAODQ6D
        subject_person_id: p_P9cwCrTVLEY5WuWbUMvrd7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ViUv15AHrqaFQnmUiFFoXl
          claim_id: c_d3zQ-TF5-il1c08QAODQ6D
          source_id: s_erwNQwwJ9mWG-Lncco1cBo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_erwNQwwJ9mWG-Lncco1cBo
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 259545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json
            external_identifier: CBDB:259545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P9cwCrTVLEY5WuWbUMvrd7
        status: active
        display_name: 王森
        merged_into_person_id: null
    - claim:
        id: c_wP18h2ANj9OGp6Bj4epKn-
        subject_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ie7MwLcUwaKdn3XbEbKjDt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0PEuHSJS6_BncQxF1i3AiZ
          claim_id: c_wP18h2ANj9OGp6Bj4epKn-
          source_id: s_oDscBfIDrn40ow7XP3UTnx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200545 王術）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oDscBfIDrn40ow7XP3UTnx
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 259547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259547&o=json
            external_identifier: CBDB:259547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ie7MwLcUwaKdn3XbEbKjDt
        status: active
        display_name: 王懋
        merged_into_person_id: null
---

# 王術

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王術 | accepted |
| birth.date | 1462年 | accepted |
| bio.summary | 王術（生于1462年），明人物。明清進士進士，籍贯慈溪，入仕進士，曾任監察御史、巡按、知縣。（中国历代人物传记资料库 CBDB 200545） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_isvcw6EfQic2NdXZzwfKeT | 王洪 | accepted |
| ancestors | p_fMLAPE2ioyP2h5eC9D65Cw | 王鎰 | accepted |
| ancestors | p_muzSurN3jFSU41spiQajYN | 王青 | accepted |
| other | p_9f3JMr7vZQNLdADD3ztWtm | 王棨 | accepted |
| other | p_AuCKU8vCgLCLaoyApF5P6w | 王梵 | accepted |
| other | p_LSUvpomfGMjUH6Tg8wQ7ya | 王彩 | accepted |
| other | p_LSk2pKsUaXXBC4m85PfwoB | 王椿 | accepted |
| other | p_P9cwCrTVLEY5WuWbUMvrd7 | 王森 | accepted |
| other | p_ie7MwLcUwaKdn3XbEbKjDt | 王懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彩（CBDB 259542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json)
- [中国历代人物传记资料库：王椿（CBDB 259543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259543&o=json)
- [中国历代人物传记资料库：王梵（CBDB 259548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json)
- [中国历代人物传记资料库：王洪（CBDB 259539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259539&o=json)
- [中国历代人物传记资料库：王懋（CBDB 259547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259547&o=json)
- [中国历代人物传记资料库：王棨（CBDB 259544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json)
- [中国历代人物传记资料库：王青（CBDB 259537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259537&o=json)
- [中国历代人物传记资料库：王森（CBDB 259545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json)
- [中国历代人物传记资料库：王術（CBDB 200545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200545&o=json)
- [中国历代人物传记资料库：王鎰（CBDB 259538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259538&o=json)
