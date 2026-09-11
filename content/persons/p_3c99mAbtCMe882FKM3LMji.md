---
schema: wang-person/v1
id: p_3c99mAbtCMe882FKM3LMji
status: active
merged_into: null
display_name: 王晏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YSYtA9NvcU2wNv4C1sBAH1
        subject_person_id: p_3c99mAbtCMe882FKM3LMji
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ah6noEmpJR4wMHUpRKJyFq
          claim_id: c_YSYtA9NvcU2wNv4C1sBAH1
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
          stance: supports
          locator: CBDB:207868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207868）
          source: &a1
            id: s_2T2xWRGb8XqgmHCNfr1KU2
            source_type: api_record
            title: 中国历代人物传记资料库：王晏（CBDB 207868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207868&o=json
            external_identifier: CBDB:207868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PLbRVcZNupEKzDFgBXYRy4
        subject_person_id: p_3c99mAbtCMe882FKM3LMji
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1404年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3tYU6pxvZJUSD5audyPmGf
          claim_id: c_PLbRVcZNupEKzDFgBXYRy4
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
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
        id: c_CaUKqQGZP8Fq7f9QM4QMYE
        subject_person_id: p_3c99mAbtCMe882FKM3LMji
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晏（生于1404年），明人物。明清進士進士，籍贯高平，入仕進士。（中国历代人物传记资料库 CBDB 207868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5D1trOjMbSPgaUnq-6ppBb
          claim_id: c_CaUKqQGZP8Fq7f9QM4QMYE
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
          stance: supports
          locator: CBDB:207868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aSUFr8U1RusZfr4e_i75GM
        subject_person_id: p_UxPyyPKFuTNFgt47NpTBe5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3c99mAbtCMe882FKM3LMji
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptyzKgn9FzH8mc8p6xtxHp
          claim_id: c_aSUFr8U1RusZfr4e_i75GM
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UxPyyPKFuTNFgt47NpTBe5
        status: active
        display_name: 王良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_w87njq1dbBwHqbMGjjAN2u
        subject_person_id: p_3c99mAbtCMe882FKM3LMji
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_C9DyFVcXTK7Zf1N7YEHdCK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ktNEAR6RiF1umL_-q4AC-
          claim_id: c_w87njq1dbBwHqbMGjjAN2u
          source_id: s_oiyUdWS4pttE6hcKMJuuuS
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oiyUdWS4pttE6hcKMJuuuS
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王晏妻)（CBDB 237226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237226&o=json
            external_identifier: CBDB:237226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C9DyFVcXTK7Zf1N7YEHdCK
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_kLSd-q-C8pZxOfy-xXVbky
        subject_person_id: p_JgSFXmEpMe8Ep4fchKiKHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3c99mAbtCMe882FKM3LMji
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C9XvKXpCSjckDWbRRyWDoo
          claim_id: c_kLSd-q-C8pZxOfy-xXVbky
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JgSFXmEpMe8Ep4fchKiKHD
        status: active
        display_name: 王思誠
        merged_into_person_id: null
    - claim:
        id: c__U84pA4CWKHEH5oMBYL1JP
        subject_person_id: p_Y58x3VBCb7H2KXk7sWbnpV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3c99mAbtCMe882FKM3LMji
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OLtO-gCEWXtSlVV3hbbhT2
          claim_id: c__U84pA4CWKHEH5oMBYL1JP
          source_id: s_2T2xWRGb8XqgmHCNfr1KU2
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y58x3VBCb7H2KXk7sWbnpV
        status: active
        display_name: 王鵬飛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王晏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晏 | accepted |
| birth.date | 1404年 | accepted |
| bio.summary | 王晏（生于1404年），明人物。明清進士進士，籍贯高平，入仕進士。（中国历代人物传记资料库 CBDB 207868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UxPyyPKFuTNFgt47NpTBe5 | 王良 | accepted |
| spouses | p_C9DyFVcXTK7Zf1N7YEHdCK | 陳氏 | accepted |
| ancestors | p_JgSFXmEpMe8Ep4fchKiKHD | 王思誠 | accepted |
| ancestors | p_Y58x3VBCb7H2KXk7sWbnpV | 王鵬飛 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王晏妻)（CBDB 237226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237226&o=json)
- [中国历代人物传记资料库：王晏（CBDB 207868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207868&o=json)
