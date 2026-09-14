---
schema: wang-person/v1
id: p_Znen7jNez4DsQZ8W2U88iW
status: active
merged_into: null
display_name: 王會
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_91CqugMdBrTkoq3x9q4cvH
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Na3bQ5BdFpuhHmD29eXA4K
          claim_id: c_91CqugMdBrTkoq3x9q4cvH
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
          stance: supports
          locator: CBDB:126770
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126770）
          source: &a1
            id: s_XWs2hW8KEw5PjB3GA4cgkG
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 126770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126770&o=json
            external_identifier: CBDB:126770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v3bLyJ9ZN1KYwJLNz6AbWJ
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMPyXSYnqCPaeGKhKj7yj6
          claim_id: c_v3bLyJ9ZN1KYwJLNz6AbWJ
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
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
        id: c_ULnRTaAYUTCdWTz1fD8CxA
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1595年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XeYra5TMtZh7BaeYMfpdTn
          claim_id: c_ULnRTaAYUTCdWTz1fD8CxA
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
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
        id: c_WK6eyRkBJ7tfFKJBLBbSYT
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會（1518年—1595年），明人物。明清進士進士，籍贯華亭，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IFQFfYWhPzCm6NRfEXbRLb
          claim_id: c_WK6eyRkBJ7tfFKJBLBbSYT
          source_id: s_XWs2hW8KEw5PjB3GA4cgkG
          stance: supports
          locator: CBDB:126770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-AyDHQMJiW0dnVYtwgzawX
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gqtOxnjoq7ciKrRghEHVlt
          claim_id: c_-AyDHQMJiW0dnVYtwgzawX
          source_id: s_PdAxWVS5S1LbYfiuHsZ3d4
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PdAxWVS5S1LbYfiuHsZ3d4
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 306001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306001&o=json
            external_identifier: CBDB:306001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26uVgWbWAkUDcgWw8N6zSa
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_QZVGNw8ocbl6Unq2Q9Cxea
        subject_person_id: p_CT7jdvGqGeXVjucR9B1hbL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GDaInAeX4-A2RKDi8F8J2X
          claim_id: c_QZVGNw8ocbl6Unq2Q9Cxea
          source_id: s_dfhHhzBmmF9oZRJx9HE1yZ
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第七十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dfhHhzBmmF9oZRJx9HE1yZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 306000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306000&o=json
            external_identifier: CBDB:306000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CT7jdvGqGeXVjucR9B1hbL
        status: active
        display_name: 王瓚
        merged_into_person_id: null
    - claim:
        id: c_WQ93-2zlGqqXGWlWV4uQzZ
        subject_person_id: p_oLHHb6jkM6de4hAURMWMmP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t6fx9Ktpve1u_KXTy0xuH8
          claim_id: c_WQ93-2zlGqqXGWlWV4uQzZ
          source_id: s_QAWPGKjTx4y3o5Ayoi8ijG
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QAWPGKjTx4y3o5Ayoi8ijG
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 305999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305999&o=json
            external_identifier: CBDB:305999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oLHHb6jkM6de4hAURMWMmP
        status: active
        display_name: 王綸
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c__QDNYrfGvJfzVOoB9Gbof3
        subject_person_id: p_FySaQ67mXQaGo4CCa3AAv9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8iEe3BalQpT9E3IxqicYUV
          claim_id: c__QDNYrfGvJfzVOoB9Gbof3
          source_id: s_YN0541UPL1bUY0T12tS71V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126770 王會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YN0541UPL1bUY0T12tS71V
            source_type: api_record
            title: 中国历代人物传记资料库：王俞（CBDB 306006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306006&o=json
            external_identifier: CBDB:306006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FySaQ67mXQaGo4CCa3AAv9
        status: active
        display_name: 王俞
        merged_into_person_id: null
    - claim:
        id: c_WaTjyzUUeXsheCT3lEhVmf
        subject_person_id: p_K5b66PBeopHvtQMuTe46Q1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41qB7P8o25PQzYO3ZoJOzC
          claim_id: c_WaTjyzUUeXsheCT3lEhVmf
          source_id: s_S44lj6v2uFM3DomjIfLn7t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126770 王會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S44lj6v2uFM3DomjIfLn7t
            source_type: api_record
            title: 中国历代人物传记资料库：王僉（CBDB 306009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306009&o=json
            external_identifier: CBDB:306009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K5b66PBeopHvtQMuTe46Q1
        status: active
        display_name: 王僉
        merged_into_person_id: null
    - claim:
        id: c_gLBwKYfPTUUjwmP_m35nCS
        subject_person_id: p_S8WxoM5Fh1DRXyFwC4NkvM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Znen7jNez4DsQZ8W2U88iW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nIPA3vhH89FlUV7XJvXVa6
          claim_id: c_gLBwKYfPTUUjwmP_m35nCS
          source_id: s_r4mSPFEZtY7gLpfP7EF7T_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126770 王會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r4mSPFEZtY7gLpfP7EF7T_
            source_type: api_record
            title: 中国历代人物传记资料库：王命（CBDB 306005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306005&o=json
            external_identifier: CBDB:306005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S8WxoM5Fh1DRXyFwC4NkvM
        status: active
        display_name: 王命
        merged_into_person_id: null
    - claim:
        id: c_nIqlel0FKhSv8sQTXBJUT1
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rKPxzCTxmXZPj1nAAFCiof
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TBLXajRowCvReJENKEnX9Q
          claim_id: c_nIqlel0FKhSv8sQTXBJUT1
          source_id: s_0Kal-NfveXtowD0MdoknJQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126770 王會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0Kal-NfveXtowD0MdoknJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 306004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json
            external_identifier: CBDB:306004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rKPxzCTxmXZPj1nAAFCiof
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_ie5-jFNhbXeRGQPVWfiMtG
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zUXH4N4LJMnYiV4RcqRJsE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qj-zjCA3yRQ4cW6g4PShmI
          claim_id: c_ie5-jFNhbXeRGQPVWfiMtG
          source_id: s_koF9ThFNR6tmw1n7myRyGC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126770 王會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_koF9ThFNR6tmw1n7myRyGC
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 306008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json
            external_identifier: CBDB:306008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zUXH4N4LJMnYiV4RcqRJsE
        status: active
        display_name: 王念
        merged_into_person_id: null
---

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| birth.date | 1518年 | accepted |
| death.date | 1595年 | accepted |
| bio.summary | 王會（1518年—1595年），明人物。明清進士進士，籍贯華亭，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126770） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_26uVgWbWAkUDcgWw8N6zSa | 王良玉 | accepted |
| ancestors | p_CT7jdvGqGeXVjucR9B1hbL | 王瓚 | accepted |
| ancestors | p_oLHHb6jkM6de4hAURMWMmP | 王綸 | accepted |
| other | p_FySaQ67mXQaGo4CCa3AAv9 | 王俞 | accepted |
| other | p_K5b66PBeopHvtQMuTe46Q1 | 王僉 | accepted |
| other | p_S8WxoM5Fh1DRXyFwC4NkvM | 王命 | accepted |
| other | p_rKPxzCTxmXZPj1nAAFCiof | 王章 | accepted |
| other | p_zUXH4N4LJMnYiV4RcqRJsE | 王念 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 126770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126770&o=json)
- [中国历代人物传记资料库：王良玉（CBDB 306001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306001&o=json)
- [中国历代人物传记资料库：王綸（CBDB 305999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305999&o=json)
- [中国历代人物传记资料库：王命（CBDB 306005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306005&o=json)
- [中国历代人物传记资料库：王念（CBDB 306008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json)
- [中国历代人物传记资料库：王僉（CBDB 306009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306009&o=json)
- [中国历代人物传记资料库：王俞（CBDB 306006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306006&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 306000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306000&o=json)
- [中国历代人物传记资料库：王章（CBDB 306004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306004&o=json)
