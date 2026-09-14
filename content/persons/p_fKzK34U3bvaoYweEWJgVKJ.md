---
schema: wang-person/v1
id: p_fKzK34U3bvaoYweEWJgVKJ
status: active
merged_into: null
display_name: 王琚
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uup8AinNww6j2SsTX9XoZH
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WQDM4ogpXGb12YufvHroa5
          claim_id: c_uup8AinNww6j2SsTX9XoZH
          source_id: s_HG7xHCtHy4d6Trj22KuRxk
          stance: supports
          locator: CBDB:200633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200633）
          source: &a1
            id: s_HG7xHCtHy4d6Trj22KuRxk
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 200633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200633&o=json
            external_identifier: CBDB:200633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WsukqSDmLGYPtJHmr1Y3VK
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JjoXWWG2Q9AYfg2Pui14tk
          claim_id: c_WsukqSDmLGYPtJHmr1Y3VK
          source_id: s_HG7xHCtHy4d6Trj22KuRxk
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
        id: c_PVpdA5iFc3M4XDkmYLDfCj
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琚（生于1450年），明人物。成化二十三年進士，籍贯望江，入仕進士。（中国历代人物传记资料库 CBDB 200633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RejEw_AsbaX2rx1omOvfIz
          claim_id: c_PVpdA5iFc3M4XDkmYLDfCj
          source_id: s_HG7xHCtHy4d6Trj22KuRxk
          stance: supports
          locator: CBDB:200633
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rXpHYVqdzOpL1wvRkogs4B
        subject_person_id: p_ZBwZdB8tEY2KUEfDHqhpeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V1kKIMl78vHOygc5Q1sX1u
          claim_id: c_rXpHYVqdzOpL1wvRkogs4B
          source_id: s_UJZTr2sGggKgZh27cf91L4
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UJZTr2sGggKgZh27cf91L4
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 242761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242761&o=json
            external_identifier: CBDB:242761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.982Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZBwZdB8tEY2KUEfDHqhpeB
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yd-gWQWVT5JSutHLKHcRVZ
        subject_person_id: p_DKHnMPfXNx3PzrBPeCXQnA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x3akTynKTmeS-BELUwDU_7
          claim_id: c_yd-gWQWVT5JSutHLKHcRVZ
          source_id: s_Awyon3BuuSfDu9cMJ5NiBU
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Awyon3BuuSfDu9cMJ5NiBU
            source_type: api_record
            title: 中国历代人物传记资料库：王震隆（CBDB 260709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260709&o=json
            external_identifier: CBDB:260709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DKHnMPfXNx3PzrBPeCXQnA
        status: active
        display_name: 王震隆
        merged_into_person_id: null
    - claim:
        id: c_EAoHnhIXxZG943m-s1YQqE
        subject_person_id: p_8hh6AFzwKDsJFPwN8t9CVF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EppS9cjHv-2BFTTrCTzmre
          claim_id: c_EAoHnhIXxZG943m-s1YQqE
          source_id: s_e6LgnTCmAH3v7KWCLEjZFb
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第二百一十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_e6LgnTCmAH3v7KWCLEjZFb
            source_type: api_record
            title: 中国历代人物传记资料库：王華卿（CBDB 242759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242759&o=json
            external_identifier: CBDB:242759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8hh6AFzwKDsJFPwN8t9CVF
        status: active
        display_name: 王華卿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_LJZThvcjHT1kv5FFFAJip1
        subject_person_id: p_AXyBVkPGwHPT7CKdmQDD9u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfqOcBWjrcA3aKWakkcF-v
          claim_id: c_LJZThvcjHT1kv5FFFAJip1
          source_id: s_cQBxf8FWp5bkIyiv0ue-vR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cQBxf8FWp5bkIyiv0ue-vR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 242774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json
            external_identifier: CBDB:242774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AXyBVkPGwHPT7CKdmQDD9u
        status: active
        display_name: 王瑛
        merged_into_person_id: null
    - claim:
        id: c_sZRTKZ_0EtdAB31zA3TK-d
        subject_person_id: p_D2wPSDAQKN7cA3Y8wQgqPM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_siU13GeISXYgE64zehVPB6
          claim_id: c_sZRTKZ_0EtdAB31zA3TK-d
          source_id: s_FnIdFzNCRSLECjaYD2utNi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FnIdFzNCRSLECjaYD2utNi
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 242770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json
            external_identifier: CBDB:242770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D2wPSDAQKN7cA3Y8wQgqPM
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_Yl-h66BzlP96HvcV54Qka2
        subject_person_id: p_LAzmXqeLSTSSaP91CUcU6f
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_su_Zoh61fdjvJhcbiJ3lRt
          claim_id: c_Yl-h66BzlP96HvcV54Qka2
          source_id: s_xnEfw-N7Om1zIM3q-uuW3Y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xnEfw-N7Om1zIM3q-uuW3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王理（CBDB 242768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json
            external_identifier: CBDB:242768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LAzmXqeLSTSSaP91CUcU6f
        status: active
        display_name: 王理
        merged_into_person_id: null
    - claim:
        id: c_ePwNJ-wEZJBgbAyC3Q0-tt
        subject_person_id: p_dPvTec33SE8eiE5zqJyPAE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igOrmf3nsrWcoBlu3Mz8Br
          claim_id: c_ePwNJ-wEZJBgbAyC3Q0-tt
          source_id: s_R1Uqzf_6OxhnGDnQjQhBtD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R1Uqzf_6OxhnGDnQjQhBtD
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 242772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242772&o=json
            external_identifier: CBDB:242772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dPvTec33SE8eiE5zqJyPAE
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_w8loz13W8hFIJFzkxdWXcT
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mhvpK9DERFQ11tcoM98rV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZD3DrpfI-w_38G7hYLhkFD
          claim_id: c_w8loz13W8hFIJFzkxdWXcT
          source_id: s_oACEjltYYMeO4y64X42TSb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oACEjltYYMeO4y64X42TSb
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 242778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json
            external_identifier: CBDB:242778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mhvpK9DERFQ11tcoM98rV6
        status: active
        display_name: 王琅
        merged_into_person_id: null
    - claim:
        id: c_6s5WJL3je-Hduej5hdHpUF
        subject_person_id: p_fKzK34U3bvaoYweEWJgVKJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziy9ABVVuhK7qvMg7sm9J4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3OldZWjOTxtqI8KSZZGgj
          claim_id: c_6s5WJL3je-Hduej5hdHpUF
          source_id: s_tmIxMokX3rAVMLLLwVbgMF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200633 王琚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tmIxMokX3rAVMLLLwVbgMF
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 242771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json
            external_identifier: CBDB:242771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ziy9ABVVuhK7qvMg7sm9J4
        status: active
        display_name: 王璉
        merged_into_person_id: null
---

# 王琚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琚 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | 王琚（生于1450年），明人物。成化二十三年進士，籍贯望江，入仕進士。（中国历代人物传记资料库 CBDB 200633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZBwZdB8tEY2KUEfDHqhpeB | 王景 | accepted |
| ancestors | p_DKHnMPfXNx3PzrBPeCXQnA | 王震隆 | accepted |
| ancestors | p_8hh6AFzwKDsJFPwN8t9CVF | 王華卿 | accepted |
| other | p_AXyBVkPGwHPT7CKdmQDD9u | 王瑛 | accepted |
| other | p_D2wPSDAQKN7cA3Y8wQgqPM | 王璽 | accepted |
| other | p_LAzmXqeLSTSSaP91CUcU6f | 王理 | accepted |
| other | p_dPvTec33SE8eiE5zqJyPAE | 王琳 | accepted |
| other | p_mhvpK9DERFQ11tcoM98rV6 | 王琅 | accepted |
| other | p_ziy9ABVVuhK7qvMg7sm9J4 | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華卿（CBDB 242759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242759&o=json)
- [中国历代人物传记资料库：王景（CBDB 242761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242761&o=json)
- [中国历代人物传记资料库：王琚（CBDB 200633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200633&o=json)
- [中国历代人物传记资料库：王琅（CBDB 242778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242778&o=json)
- [中国历代人物传记资料库：王理（CBDB 242768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242768&o=json)
- [中国历代人物传记资料库：王璉（CBDB 242771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242771&o=json)
- [中国历代人物传记资料库：王琳（CBDB 242772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242772&o=json)
- [中国历代人物传记资料库：王璽（CBDB 242770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242770&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 242774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242774&o=json)
- [中国历代人物传记资料库：王震隆（CBDB 260709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260709&o=json)
