---
schema: wang-person/v1
id: p_ehqJ7voc9MMuek9ZFfRrZh
status: active
merged_into: null
display_name: 王橫
cbdb_id: 35385
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E5Qwvgc82Q69Ywg889X3hV
        subject_person_id: p_ehqJ7voc9MMuek9ZFfRrZh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橫，金人物。籍贯華陰。（中国历代人物传记资料库 CBDB 35385）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_OnmF_jHkVyBD9jETY1WTyB
          claim_id: c_E5Qwvgc82Q69Ywg889X3hV
          source_id: s_CwcXYFRt9PpNnEySUavGWt
          stance: supports
          locator: CBDB:35385
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CwcXYFRt9PpNnEySUavGWt
            source_type: api_record
            title: 中国历代人物传记资料库：王橫（CBDB 35385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35385&o=json
            external_identifier: CBDB:35385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iE6e4Gnw5gbTLcaPjgDL7C
        subject_person_id: p_ehqJ7voc9MMuek9ZFfRrZh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NiTaFoqy6gwnobYJhPJEuw
          claim_id: c_iE6e4Gnw5gbTLcaPjgDL7C
          source_id: s_CwcXYFRt9PpNnEySUavGWt
          stance: supports
          locator: CBDB:35385
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 金
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DpzbIr-I5r0bJ_UMsxOSXq
        subject_person_id: p_ehqJ7voc9MMuek9ZFfRrZh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fSZQfVXzPXgEPeK78DK476
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2uorlQTgVi-gVOVj72nmH_
          claim_id: c_DpzbIr-I5r0bJ_UMsxOSXq
          source_id: s_dNdWc1mZabt5LJiDUpi9Hr
          stance: supports
          locator: CBDB 双向互证（父 王橫 ⇄ 子 王浩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_dNdWc1mZabt5LJiDUpi9Hr
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 35384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35384&o=json
            external_identifier: CBDB:35384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fSZQfVXzPXgEPeK78DK476
        status: active
        display_name: 王浩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王橫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王橫，金人物。籍贯華陰。（中国历代人物传记资料库 CBDB 35385） | accepted |
| name.primary | 王橫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fSZQfVXzPXgEPeK78DK476 | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 35384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35384&o=json)
- [中国历代人物传记资料库：王橫（CBDB 35385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35385&o=json)
