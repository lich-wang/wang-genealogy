---
schema: wang-person/v1
id: p_tT3AHMVCDA6J2Jocyd9E1J
status: active
merged_into: null
display_name: 王隆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5UJx2pJTsmkKJ16x8X6eHX
        subject_person_id: p_tT3AHMVCDA6J2Jocyd9E1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m6krZigiXEJx2WZng9SaD1
          claim_id: c_5UJx2pJTsmkKJ16x8X6eHX
          source_id: s_sQr49zkzngEj8QWATa1oCU
          stance: supports
          locator: CBDB:239879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239879）
          source: &a1
            id: s_sQr49zkzngEj8QWATa1oCU
            source_type: api_record
            title: 中国历代人物传记资料库：王隆（CBDB 239879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239879&o=json
            external_identifier: CBDB:239879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_chKWknB3PrnLBuLx67K6Td
        subject_person_id: p_tT3AHMVCDA6J2Jocyd9E1J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隆，明人物。正统十年進士，曾任丞相。（中国历代人物传记资料库 CBDB 239879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7AWN1uEjgXdteCeg1MOidd
          claim_id: c_chKWknB3PrnLBuLx67K6Td
          source_id: s_sQr49zkzngEj8QWATa1oCU
          stance: supports
          locator: CBDB:239879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_XHUkHhrGlhclo4LTHnpH0x
        subject_person_id: p_tT3AHMVCDA6J2Jocyd9E1J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_e8Zr493vi2djpmCUjmBf8z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j8brIICzNaW-Zkywze8VXb
          claim_id: c_XHUkHhrGlhclo4LTHnpH0x
          source_id: s_sQr49zkzngEj8QWATa1oCU
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e8Zr493vi2djpmCUjmBf8z
        status: active
        display_name: 王敞
        merged_into_person_id: null
  other: []
---

# 王隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隆 | accepted |
| bio.summary | 王隆，明人物。正统十年進士，曾任丞相。（中国历代人物传记资料库 CBDB 239879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_e8Zr493vi2djpmCUjmBf8z | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隆（CBDB 239879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239879&o=json)
