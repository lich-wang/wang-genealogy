---
schema: wang-person/v1
id: p_Zdi2Km3RGj7j9DbgDHE4J3
status: active
merged_into: null
display_name: 王謨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wd81q3NGGG6Yf5Sgz8ykes
        subject_person_id: p_Zdi2Km3RGj7j9DbgDHE4J3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v7DBJ3xLF7Lw5y4gJy3QdE
          claim_id: c_wd81q3NGGG6Yf5Sgz8ykes
          source_id: s_5SmPAEG9qr2q9QE8PX97x8
          stance: supports
          locator: CBDB:170263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170263）
          source: &a1
            id: s_5SmPAEG9qr2q9QE8PX97x8
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 170263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170263&o=json
            external_identifier: CBDB:170263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_obJNYdK5pDqAT25mNJgWVx
        subject_person_id: p_Zdi2Km3RGj7j9DbgDHE4J3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 699年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KY89WW9k9kHpMoLbEjxQ9r
          claim_id: c_obJNYdK5pDqAT25mNJgWVx
          source_id: s_5SmPAEG9qr2q9QE8PX97x8
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
        id: c_tttmrx7rmia7xDiiQzChJ1
        subject_person_id: p_Zdi2Km3RGj7j9DbgDHE4J3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨（卒于699年），唐人物。籍贯武進。（中国历代人物传记资料库 CBDB 170263）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eTBaFWO5Bf1PzH5b4ez3jD
          claim_id: c_tttmrx7rmia7xDiiQzChJ1
          source_id: s_5SmPAEG9qr2q9QE8PX97x8
          stance: supports
          locator: CBDB:170263
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_t5JtkTl0jWRRzeuC-LHWtQ
        subject_person_id: p_Zdi2Km3RGj7j9DbgDHE4J3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_StpRQqqgHhK5fWuKMf7Cn3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bPAOZX9igCabFAwhXjt8V7
          claim_id: c_t5JtkTl0jWRRzeuC-LHWtQ
          source_id: s_prkY3PGyVRnF9dQr7j2HmK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_prkY3PGyVRnF9dQr7j2HmK
            source_type: api_record
            title: 中国历代人物传记资料库：王思本（CBDB 169791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169791&o=json
            external_identifier: CBDB:169791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_StpRQqqgHhK5fWuKMf7Cn3
        status: active
        display_name: 王思本
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謨 | accepted |
| death.date | 699年 | accepted |
| bio.summary | 王謨（卒于699年），唐人物。籍贯武進。（中国历代人物传记资料库 CBDB 170263） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_StpRQqqgHhK5fWuKMf7Cn3 | 王思本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謨（CBDB 170263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170263&o=json)
- [中国历代人物传记资料库：王思本（CBDB 169791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169791&o=json)
