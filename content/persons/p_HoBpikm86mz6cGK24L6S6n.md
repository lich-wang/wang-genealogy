---
schema: wang-person/v1
id: p_HoBpikm86mz6cGK24L6S6n
status: active
merged_into: null
display_name: 王金增
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_27HQt6j9bYz57u1F4FWoFb
        subject_person_id: p_HoBpikm86mz6cGK24L6S6n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PPUkgJASHVG8d3Vi51y7cR
          claim_id: c_27HQt6j9bYz57u1F4FWoFb
          source_id: s_bJxLsz43RdDNVJjyzahday
          stance: supports
          locator: CBDB:700206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700206）
          source: &a1
            id: s_bJxLsz43RdDNVJjyzahday
            source_type: api_record
            title: 中国历代人物传记资料库：王金增（CBDB 700206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700206&o=json
            external_identifier: CBDB:700206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3MMh3LK46GE4v9SSwtComc
        subject_person_id: p_HoBpikm86mz6cGK24L6S6n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王金增，清人物。籍贯蘇州府，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 700206）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A46uF16lP3mZCjtcCiuQQY
          claim_id: c_3MMh3LK46GE4v9SSwtComc
          source_id: s_bJxLsz43RdDNVJjyzahday
          stance: supports
          locator: CBDB:700206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Nfumy7PXzg_e6pMEnrWgmY
        subject_person_id: p_HoBpikm86mz6cGK24L6S6n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P3pbuNHRwGktLgABPRBMMp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaBEq6LiNz9Z__q3BXlkjC
          claim_id: c_Nfumy7PXzg_e6pMEnrWgmY
          source_id: s_bJxLsz43RdDNVJjyzahday
          stance: supports
          locator: 吳門補乘，lgid=177449：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P3pbuNHRwGktLgABPRBMMp
        status: active
        display_name: 王世錦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Eaax3XzolpAHuQXBIe-iuQ
        subject_person_id: p_FaVxhCqbFD9FLrnWtGuBry
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HoBpikm86mz6cGK24L6S6n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hb3SKd8hI-MIrA60oK04do
          claim_id: c_Eaax3XzolpAHuQXBIe-iuQ
          source_id: s_EZLxaF64Wb_JONy9dA7kr8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 700206 王金增）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EZLxaF64Wb_JONy9dA7kr8
            source_type: api_record
            title: 中国历代人物传记资料库：王奕經（CBDB 700207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700207&o=json
            external_identifier: CBDB:700207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FaVxhCqbFD9FLrnWtGuBry
        status: active
        display_name: 王奕經
        merged_into_person_id: null
    - claim:
        id: c_cBpFuIzAOL6vGcpiN1uDa8
        subject_person_id: p_HoBpikm86mz6cGK24L6S6n
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pSEeJKUF3qMxSGtyx2QMLA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gw-Guwd9FEC-BHInw-vTaZ
          claim_id: c_cBpFuIzAOL6vGcpiN1uDa8
          source_id: s_Tj98SjAhyxLIFBzBhdVfIO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 700206 王金增）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tj98SjAhyxLIFBzBhdVfIO
            source_type: api_record
            title: 中国历代人物传记资料库：王奕組（CBDB 71899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71899&o=json
            external_identifier: CBDB:71899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pSEeJKUF3qMxSGtyx2QMLA
        status: active
        display_name: 王奕組
        merged_into_person_id: null
---

# 王金增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金增 | accepted |
| bio.summary | 王金增，清人物。籍贯蘇州府，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 700206） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_P3pbuNHRwGktLgABPRBMMp | 王世錦 | accepted |
| other | p_FaVxhCqbFD9FLrnWtGuBry | 王奕經 | accepted |
| other | p_pSEeJKUF3qMxSGtyx2QMLA | 王奕組 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金增（CBDB 700206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700206&o=json)
- [中国历代人物传记资料库：王奕經（CBDB 700207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700207&o=json)
- [中国历代人物传记资料库：王奕組（CBDB 71899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71899&o=json)
