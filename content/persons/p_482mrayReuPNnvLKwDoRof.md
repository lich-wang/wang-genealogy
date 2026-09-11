---
schema: wang-person/v1
id: p_482mrayReuPNnvLKwDoRof
status: active
merged_into: null
display_name: 韋庸
revision: 1
cbdb_id: 159918
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oBIEQfsa1aywQoZwJoJv9f
        subject_person_id: p_482mrayReuPNnvLKwDoRof
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韋庸，唐人物。籍贯長安，曾任觀察使。（中国历代人物传记资料库 CBDB 159918）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J1_kOwwHL4q3soyQpr7kcs
          claim_id: c_oBIEQfsa1aywQoZwJoJv9f
          source_id: s_u6YP3xRrx_jNa1lGG6PfFg
          stance: supports
          locator: CBDB:159918
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_u6YP3xRrx_jNa1lGG6PfFg
            source_type: api_record
            title: 中国历代人物传记资料库：韋庸（CBDB 159918）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159918&o=json
            external_identifier: CBDB:159918
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Dmy_wlrlg6lsKgmIjrREC
        subject_person_id: p_482mrayReuPNnvLKwDoRof
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 韋庸
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXdgCrYLyFIJ_O_mnxquHK
          claim_id: c_9Dmy_wlrlg6lsKgmIjrREC
          source_id: s_u6YP3xRrx_jNa1lGG6PfFg
          stance: supports
          locator: CBDB:159918
          quotation: null
          interpretation_note: CBDB 明确记录的王媛配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_o5UcvWWdzXCwtR98okt962
        subject_person_id: p_uLaLPBxvrB4tfDFJc3FdjM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_482mrayReuPNnvLKwDoRof
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RqroPNR94x4ZfR9wOTE56c
          claim_id: c_o5UcvWWdzXCwtR98okt962
          source_id: s_u6YP3xRrx_jNa1lGG6PfFg
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uLaLPBxvrB4tfDFJc3FdjM
        status: active
        display_name: 王媛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 韋庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 韋庸，唐人物。籍贯長安，曾任觀察使。（中国历代人物传记资料库 CBDB 159918） | accepted |
| name.primary | 韋庸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uLaLPBxvrB4tfDFJc3FdjM | 王媛 | accepted |

## 外部来源

- [中国历代人物传记资料库：韋庸（CBDB 159918）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159918&o=json)
