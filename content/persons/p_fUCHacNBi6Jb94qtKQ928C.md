---
schema: wang-person/v1
id: p_fUCHacNBi6Jb94qtKQ928C
status: active
merged_into: null
display_name: 刘英媛
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F254L4QLzbYRSbecu8o_Yl
        subject_person_id: p_fUCHacNBi6Jb94qtKQ928C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘英媛（?—?），封临川长公主，是中国南北朝宋文帝刘义隆第六女，《资治通鉴》作世祖（宋孝武帝）女。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_0UQ0baHDjjWCH_8lv8zDGU
          claim_id: c_F254L4QLzbYRSbecu8o_Yl
          source_id: s_6xFtK5forByjXUQOwAPZZV
          stance: supports
          locator: 导言
          quotation: 刘英媛（?—?），封临川长公主，是中国南北朝宋文帝刘义隆第六女，
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_6xFtK5forByjXUQOwAPZZV
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: Q16603333
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8rpxgDX7pcahFV7AqnHFDM
        subject_person_id: p_fUCHacNBi6Jb94qtKQ928C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 刘英媛
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FKSEKKrQqHFmgaAUcMhcKh
          claim_id: c_8rpxgDX7pcahFV7AqnHFDM
          source_id: s_b8KKgCWYJYobgfZ51ADh7W
          stance: supports
          locator: Q16603333
          quotation: null
          interpretation_note: null
          source:
            id: s_b8KKgCWYJYobgfZ51ADh7W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉英媛（120213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120213&o=json
            external_identifier: CBDB:120213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:00.359Z
            metadata_json: null
        - id: cs_hRKK4E8dHKJNDYMmesFaQF
          claim_id: c_8rpxgDX7pcahFV7AqnHFDM
          source_id: s_EyqFK4QMbrvDvmC7aifKWb
          stance: supports
          locator: Q16603333
          quotation: null
          interpretation_note: null
          source:
            id: s_EyqFK4QMbrvDvmC7aifKWb
            source_type: api_record
            title: 维基数据：刘英媛（Q16603333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603333
            external_identifier: Q16603333
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:00.211Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_cZHZHTsH8Urg2Ss2R4QQFD
        subject_person_id: p_fUCHacNBi6Jb94qtKQ928C
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xHtjbkzQpxs78ENySENCje
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_g7hCeG3qQjBoQF1fn8HVSU
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_7WZ1bXXFFGZBWP4R1KQMS4
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_7WZ1bXXFFGZBWP4R1KQMS4
            source_type: api_record
            title: 维基数据：王藻（Q22814742）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814742
            external_identifier: Q22814742
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:48.465Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%97%BB_(%E5%8A%89%E5%AE%8B)
        - id: cs_i3iCuryHjWDZ2yibbC17VF
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_MFnYy28dp1YpBTNugLeP4g
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_MFnYy28dp1YpBTNugLeP4g
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王藻（120215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120215&o=json
            external_identifier: CBDB:120215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:17:48.624Z
            metadata_json: null
        - id: cs_QUUJLXf8faTVFSGA9kD7g8
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_EyqFK4QMbrvDvmC7aifKWb
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_EyqFK4QMbrvDvmC7aifKWb
            source_type: api_record
            title: 维基数据：刘英媛（Q16603333）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603333
            external_identifier: Q16603333
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:00.211Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
        - id: cs_iJSjf33iBrjg4n4TYWvjRw
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_b8KKgCWYJYobgfZ51ADh7W
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_b8KKgCWYJYobgfZ51ADh7W
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：劉英媛（120213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120213&o=json
            external_identifier: CBDB:120213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:00.359Z
            metadata_json: null
        - id: cs_UzvjjS8QZ88KMnMAi1DoUK
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_vLgWxtYsDS8PnqHuPk8WcV
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_vLgWxtYsDS8PnqHuPk8WcV
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:06.830Z
            metadata_json: null
        - id: cs_FdTQHL8kCA6xMLaiz9t81P
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_RrhKDRXJPNiGnFDuhKXHFh
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_RrhKDRXJPNiGnFDuhKXHFh
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:35.217Z
            metadata_json: null
        - id: cs_2JEC7XXnT4Rs3xw1h8QuC5
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_jSjNCcfCfCYFX1SZrvgBEn
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_jSjNCcfCfCYFX1SZrvgBEn
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:35.038Z
            metadata_json: null
        - id: cs_z8nMNJPLnPr7zbWSs8Er2G
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_ADxTkDBfjXZfC1GuzpYA1S
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_ADxTkDBfjXZfC1GuzpYA1S
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:09.897Z
            metadata_json: null
        - id: cs_SAgV3hyhWN2Q7t2K2Q7ZnA
          claim_id: c_cZHZHTsH8Urg2Ss2R4QQFD
          source_id: s_ZfJLBohdzDDaArahdSPWC4
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王藻
          interpretation_note: null
          source:
            id: s_ZfJLBohdzDDaArahdSPWC4
            source_type: website
            title: 中文维基百科：劉英媛
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:29.551Z
            metadata_json: null
      object_person:
        id: p_xHtjbkzQpxs78ENySENCje
        status: active
        display_name: 王藻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 刘英媛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 刘英媛（?—?），封临川长公主，是中国南北朝宋文帝刘义隆第六女，《资治通鉴》作世祖（宋孝武帝）女。 | accepted |
| name.primary | 刘英媛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xHtjbkzQpxs78ENySENCje | 王藻 | accepted |

## 外部来源

- [维基数据：刘英媛（Q16603333）](https://www.wikidata.org/wiki/Q16603333)
- [维基数据：王藻（Q22814742）](https://www.wikidata.org/wiki/Q22814742)
- [中文维基百科：劉英媛](https://zh.wikipedia.org/wiki/%E5%8A%89%E8%8B%B1%E5%AA%9B)
- [CBDB 中国历代人物传记资料库：劉英媛（120213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120213&o=json)
- [CBDB 中国历代人物传记资料库：王藻（120215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120215&o=json)
