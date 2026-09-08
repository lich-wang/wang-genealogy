---
schema: wang-person/v1
id: p_V2Doo57wvZbJXi5ms13R7t
status: active
merged_into: null
display_name: 王与准
cbdb_id: 254712
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hJKpHfGatQ3CwBo1CC5jMz
        subject_person_id: p_V2Doo57wvZbJXi5ms13R7t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王与准，明人物。中国历代人物传记资料库（CBDB）以人物编号 254712 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XHDqrR85n5UmHhqo8ZJLMt
          claim_id: c_hJKpHfGatQ3CwBo1CC5jMz
          source_id: s_MRfa71QMX14YkV6nXUKPbr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_MRfa71QMX14YkV6nXUKPbr
            source_type: api_record
            title: 维基数据：王与准（Q45601206）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601206
            external_identifier: Q45601206
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:46.649Z
            metadata_json: null
        - id: cs_Exqc-qbJFu3iC-ztLi1aBY
          claim_id: c_hJKpHfGatQ3CwBo1CC5jMz
          source_id: s_gji4vgma9kix4so6AG1Su6
          stance: supports
          locator: CBDB:254712
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gji4vgma9kix4so6AG1Su6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王與準（254712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254712&o=json
            external_identifier: CBDB:254712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:46.787Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SkzGGgBKajgknjipVLLa9g
        subject_person_id: p_V2Doo57wvZbJXi5ms13R7t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王与准
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QXqCxEcJQHBvJx4uafgBmk
          claim_id: c_SkzGGgBKajgknjipVLLa9g
          source_id: s_gji4vgma9kix4so6AG1Su6
          stance: supports
          locator: Q45601206
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hYdgBrXcoAQjYorAEN8k9T
          claim_id: c_SkzGGgBKajgknjipVLLa9g
          source_id: s_MRfa71QMX14YkV6nXUKPbr
          stance: supports
          locator: Q45601206
          quotation: null
          interpretation_note: null
          source:
            id: s_MRfa71QMX14YkV6nXUKPbr
            source_type: api_record
            title: 维基数据：王与准（Q45601206）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601206
            external_identifier: Q45601206
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:46.649Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RqxC5ALXCo9pzxUJSaLKCY
        subject_person_id: p_49QQn5RBB6SwzqgWd3Hdrd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_V2Doo57wvZbJXi5ms13R7t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6ApjjBLvhQ8hCMMCDW54Pj
          claim_id: c_RqxC5ALXCo9pzxUJSaLKCY
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系圖
          quotation: 余姚王氏 世系圖：王彦达 → 王与准
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_49QQn5RBB6SwzqgWd3Hdrd
        status: active
        display_name: 王彦达
        merged_into_person_id: null
  children:
    - claim:
        id: c_Dh7UfGRTcnNGdtqy2u2T68
        subject_person_id: p_V2Doo57wvZbJXi5ms13R7t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5tGaG9aQ657ZJ62g62UKUJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_P2YqqyEtKNAhkuE7pGeuoW
          claim_id: c_Dh7UfGRTcnNGdtqy2u2T68
          source_id: s_afnBHwMfAJQHEjwJDZXUds
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_afnBHwMfAJQHEjwJDZXUds
            source_type: api_record
            title: 维基数据：王杰（Q45601328）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601328
            external_identifier: Q45601328
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
        - id: cs_J38fd2eYSVwhbZKtvAMKGz
          claim_id: c_Dh7UfGRTcnNGdtqy2u2T68
          source_id: s_MRfa71QMX14YkV6nXUKPbr
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MRfa71QMX14YkV6nXUKPbr
            source_type: api_record
            title: 维基数据：王与准（Q45601206）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601206
            external_identifier: Q45601206
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:46.649Z
            metadata_json: null
        - id: cs_8JYqUBz2EZQ6dMGWUaFw3C
          claim_id: c_Dh7UfGRTcnNGdtqy2u2T68
          source_id: s_EhFHcfWz7Y8ks9SN62JqMv
          stance: supports
          locator: 条文：世系圖
          quotation: 余姚王氏 世系圖：王与准 → 王杰
          interpretation_note: null
          source:
            id: s_EhFHcfWz7Y8ks9SN62JqMv
            source_type: website
            title: 中文维基百科：余姚王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.836Z
            metadata_json: null
      object_person:
        id: p_5tGaG9aQ657ZJ62g62UKUJ
        status: active
        display_name: 王杰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_YX9xscRBP27NzNGNJPmJBA
        subject_person_id: p_V2Doo57wvZbJXi5ms13R7t
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TQiMhGLRXGBc7HWBFHEr7P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Cez13y8yRbYCsYbp3j2rG
          claim_id: c_YX9xscRBP27NzNGNJPmJBA
          source_id: s_JztmEnfZGFhb6RGHDcNuiu
          stance: supports
          locator: 条文：信息框 親屬（高祖父）（5世）
          quotation: 王與準（高祖父）
          interpretation_note: null
          source:
            id: s_JztmEnfZGFhb6RGHDcNuiu
            source_type: website
            title: 中文维基百科：王陽明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%99%BD%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_TQiMhGLRXGBc7HWBFHEr7P
        status: active
        display_name: 王守仁
        merged_into_person_id: null
  other: []
---

# 王与准

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王与准，明人物。中国历代人物传记资料库（CBDB）以人物编号 254712 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王与准 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_49QQn5RBB6SwzqgWd3Hdrd | 王彦达 | accepted |
| children | p_5tGaG9aQ657ZJ62g62UKUJ | 王杰 | accepted |
| descendants | p_TQiMhGLRXGBc7HWBFHEr7P | 王守仁 | accepted |

## 外部来源

- [维基数据：王杰（Q45601328）](https://www.wikidata.org/wiki/Q45601328)
- [维基数据：王与准（Q45601206）](https://www.wikidata.org/wiki/Q45601206)
- [中文维基百科：王陽明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%99%BD%E6%98%8E)
- [中文维基百科：余姚王氏](https://zh.wikipedia.org/wiki/%E4%BD%99%E5%A7%9A%E7%8E%8B%E6%B0%8F)
- [CBDB 中国历代人物传记资料库：王與準（254712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254712&o=json)
