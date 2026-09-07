---
schema: wang-person/v1
id: p_j7NSpVRbt4GYxTJc7vihVK
status: active
merged_into: null
display_name: 劉英娥
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K67LZKjJldR1T261LP1dQ1
        subject_person_id: p_j7NSpVRbt4GYxTJc7vihVK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉英娥（420年代—452年），是中国南北朝宋文帝刘义隆嫡女，母親是皇后袁齐妫。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_lNJVaeh02o_tbbJqqx_zr7
          claim_id: c_K67LZKjJldR1T261LP1dQ1
          source_id: s_BOpmMEhQ0Zp8YxhhicXQqs
          stance: supports
          locator: 导言
          quotation: 劉英娥（420年代—452年），是中国南北朝宋文帝刘义隆嫡女，母
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_BOpmMEhQ0Zp8YxhhicXQqs
            source_type: website
            title: 中文维基百科：劉英娥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
            external_identifier: Q16603332
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCUBMtc78tuSBDTStb5rGq
        subject_person_id: p_j7NSpVRbt4GYxTJc7vihVK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉英娥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_t6xadt5c9QjcEU7Y5Q94Kf
          claim_id: c_LCUBMtc78tuSBDTStb5rGq
          source_id: s_kDYvdEGVtbVgS1BakUYd6x
          stance: supports
          locator: Q16603332
          quotation: null
          interpretation_note: null
          source:
            id: s_kDYvdEGVtbVgS1BakUYd6x
            source_type: api_record
            title: 维基数据：劉英娥（Q16603332）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603332
            external_identifier: Q16603332
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:47.715Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Jxr5xGU7zzxX564mMghdKW
        subject_person_id: p_j7NSpVRbt4GYxTJc7vihVK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wZDz78cKE5G7JTVc18RWBx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_kpWZpspJBY1iza63gQX14Z
          claim_id: c_Jxr5xGU7zzxX564mMghdKW
          source_id: s_zf6FTqxTe4zpty13eEQDiD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_zf6FTqxTe4zpty13eEQDiD
            source_type: api_record
            title: 维基数据：王僧綽（Q11572911）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572911
            external_identifier: Q11572911
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:27.598Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%A7%E7%B6%BD
        - id: cs_8bTf5zxUPsYG58745AJ66Q
          claim_id: c_Jxr5xGU7zzxX564mMghdKW
          source_id: s_kDYvdEGVtbVgS1BakUYd6x
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_kDYvdEGVtbVgS1BakUYd6x
            source_type: api_record
            title: 维基数据：劉英娥（Q16603332）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603332
            external_identifier: Q16603332
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:47.715Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
        - id: cs_ZskgoiYmRb6iACseTXmEtG
          claim_id: c_Jxr5xGU7zzxX564mMghdKW
          source_id: s_h3YEL1SPHfQSngkRD9p2gB
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王僧绰
          interpretation_note: null
          source:
            id: s_h3YEL1SPHfQSngkRD9p2gB
            source_type: website
            title: 中文维基百科：劉英娥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:03.376Z
            metadata_json: null
        - id: cs_34SiJ1xPfqU5qSccqrKG1v
          claim_id: c_Jxr5xGU7zzxX564mMghdKW
          source_id: s_DqGSSAsLrrBLnL7WkGuV5x
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王僧绰
          interpretation_note: null
          source:
            id: s_DqGSSAsLrrBLnL7WkGuV5x
            source_type: website
            title: 中文维基百科：劉英娥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:30.939Z
            metadata_json: null
        - id: cs_SgRREUfgjKhnG4eW1gPyQs
          claim_id: c_Jxr5xGU7zzxX564mMghdKW
          source_id: s_nk2y9JRParSxUH8LvvwWvv
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王僧绰
          interpretation_note: null
          source:
            id: s_nk2y9JRParSxUH8LvvwWvv
            source_type: website
            title: 中文维基百科：劉英娥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:31.166Z
            metadata_json: null
        - id: cs_S5eMM5zVDyfrMDPDFRbAkf
          claim_id: c_Jxr5xGU7zzxX564mMghdKW
          source_id: s_hwfSaiV7C3cJTPLftUsrXm
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王僧绰
          interpretation_note: null
          source:
            id: s_hwfSaiV7C3cJTPLftUsrXm
            source_type: website
            title: 中文维基百科：劉英娥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:01.824Z
            metadata_json: null
        - id: cs_3ohA2Q8JdnUcNAwwXkYR1z
          claim_id: c_Jxr5xGU7zzxX564mMghdKW
          source_id: s_CB61PGdHxPXMvsvXSCqHVN
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王僧绰
          interpretation_note: null
          source:
            id: s_CB61PGdHxPXMvsvXSCqHVN
            source_type: website
            title: 中文维基百科：劉英娥
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:28.711Z
            metadata_json: null
      object_person:
        id: p_wZDz78cKE5G7JTVc18RWBx
        status: active
        display_name: 王僧綽
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉英娥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉英娥（420年代—452年），是中国南北朝宋文帝刘义隆嫡女，母親是皇后袁齐妫。 | accepted |
| name.primary | 劉英娥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_wZDz78cKE5G7JTVc18RWBx | 王僧綽 | accepted |

## 外部来源

- [维基数据：劉英娥（Q16603332）](https://www.wikidata.org/wiki/Q16603332)
- [维基数据：王僧綽（Q11572911）](https://www.wikidata.org/wiki/Q11572911)
- [中文维基百科：劉英娥](https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%A8%A5)
