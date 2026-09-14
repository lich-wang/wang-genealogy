---
schema: wang-person/v1
id: p_nGPUpdu2RVweqwUZHLG6KZ
status: active
merged_into: null
display_name: 王之卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pGCjVgBPhrCNsPt817NJuf
        subject_person_id: p_nGPUpdu2RVweqwUZHLG6KZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3TFGvZ6bp2ja6MGDQ8WBGE
          claim_id: c_pGCjVgBPhrCNsPt817NJuf
          source_id: s_XnNtLS2ztQWWcv2Je8fwMN
          stance: supports
          locator: CBDB:227714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227714）
          source: &a1
            id: s_XnNtLS2ztQWWcv2Je8fwMN
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 227714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json
            external_identifier: CBDB:227714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vTCRjYpjoJv9FMZ323qDTR
        subject_person_id: p_nGPUpdu2RVweqwUZHLG6KZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之卿，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227714）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OzV-Tl9vpjX7Kr40cQBQCa
          claim_id: c_vTCRjYpjoJv9FMZ323qDTR
          source_id: s_XnNtLS2ztQWWcv2Je8fwMN
          stance: supports
          locator: CBDB:227714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E_1VJGYLtxuignzDNgb0yI
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nGPUpdu2RVweqwUZHLG6KZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J-2a-FZEWRKTzwxc_A_TBF
          claim_id: c_E_1VJGYLtxuignzDNgb0yI
          source_id: s_-M5GbKs-RTpWxNsceKqjvQ
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之卿 与 王之翰 为同胞（CBDB 记「弟」），王之翰 之父／母即 王之卿 之父／母。
          source:
            id: s_-M5GbKs-RTpWxNsceKqjvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 227714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json
            external_identifier: CBDB:227714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hfNqr6f1P7uM2hMBq7xoJD
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e1uf5yYzlzwdAZpemZFiT1
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nGPUpdu2RVweqwUZHLG6KZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9_dXjiu-BUWhLeupCINR5
          claim_id: c_e1uf5yYzlzwdAZpemZFiT1
          source_id: s_-M5GbKs-RTpWxNsceKqjvQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-M5GbKs-RTpWxNsceKqjvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 227714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json
            external_identifier: CBDB:227714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
---

# 王之卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之卿 | accepted |
| bio.summary | 王之卿，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hfNqr6f1P7uM2hMBq7xoJD | 王崇 | accepted |
| other | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之卿（CBDB 227714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json)
