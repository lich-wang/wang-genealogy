---
schema: wang-person/v1
id: p_FSJo4VJrVMANcpQMQhv6T8
status: active
merged_into: null
display_name: 王一陽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DrDd5ka2AgH7D1v2RgNoiy
        subject_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WqLECRz9PJ75RLcdYDrKWF
          claim_id: c_DrDd5ka2AgH7D1v2RgNoiy
          source_id: s_fvAYsp36F78Pyp2wVZmZiu
          stance: supports
          locator: CBDB:221867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221867）
          source: &a1
            id: s_fvAYsp36F78Pyp2wVZmZiu
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 221867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json
            external_identifier: CBDB:221867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hdkXkDJA42drSMpkCNPyFZ
        subject_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221867）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ENYbf385dd3_0t1hjYOA8v
          claim_id: c_hdkXkDJA42drSMpkCNPyFZ
          source_id: s_fvAYsp36F78Pyp2wVZmZiu
          stance: supports
          locator: CBDB:221867
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6AyJNiEysFLQFnX7qCURoY
        subject_person_id: p_iEzBpfQksvKwtnLVgiEPSK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xX_mLqv-hU950Ph2_YN1OP
          claim_id: c_6AyJNiEysFLQFnX7qCURoY
          source_id: s_wB3YjYL39BFimN2Qs0sTrs
          stance: supports
          locator: CBDB：兄弟 王三陽（206708）之父／母 王賜良
          quotation: null
          interpretation_note: 由兄弟关系推断：王一陽 与 王三陽 为同胞（CBDB 记「弟」），王三陽 之父／母即 王一陽 之父／母。
          source:
            id: s_wB3YjYL39BFimN2Qs0sTrs
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 221867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json
            external_identifier: CBDB:221867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iEzBpfQksvKwtnLVgiEPSK
        status: active
        display_name: 王賜良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LWJN6re-jQOYKtgFNf6k_e
        subject_person_id: p_CE6L82D742RNyGAmxCYAn5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FSJo4VJrVMANcpQMQhv6T8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HF9CK8r5uEHc_V5GJbxu_
          claim_id: c_LWJN6re-jQOYKtgFNf6k_e
          source_id: s_wB3YjYL39BFimN2Qs0sTrs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206708 王三陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wB3YjYL39BFimN2Qs0sTrs
            source_type: api_record
            title: 中国历代人物传记资料库：王一陽（CBDB 221867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json
            external_identifier: CBDB:221867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CE6L82D742RNyGAmxCYAn5
        status: active
        display_name: 王三陽
        merged_into_person_id: null
---

# 王一陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一陽 | accepted |
| bio.summary | 王一陽，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iEzBpfQksvKwtnLVgiEPSK | 王賜良 | accepted |
| other | p_CE6L82D742RNyGAmxCYAn5 | 王三陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一陽（CBDB 221867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221867&o=json)
