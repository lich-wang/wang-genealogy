---
schema: wang-person/v1
id: p_3SDBo4j4p9czjqTXkQXsB7
status: active
merged_into: null
display_name: 王朗 (三國)
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YNeYWa-XC45-Hd3lwDSbFq
        subject_person_id: p_3SDBo4j4p9czjqTXkQXsB7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗 (三國)
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fzSy3_O-bw76NJgQJaHhqj
          claim_id: c_YNeYWa-XC45-Hd3lwDSbFq
          source_id: s__Np5uu8qmUsAKBfZz2x5sZ
          stance: supports
          locator: 三國志·卷十三·王朗傳
          quotation: null
          interpretation_note: 依据《三国志·王朗传》正史原文补录。
          source: &a1
            id: s__Np5uu8qmUsAKBfZz2x5sZ
            source_type: website
            title: 维基文库：三國志·卷十三·魏書·王朗傳
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/三國志/卷13
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T00:21:32.314Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_auelyVmLqyuk-lopWHLERL
        subject_person_id: p_3SDBo4j4p9czjqTXkQXsB7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朗，字景興，東海郯人。東漢末、三國魏重臣，歷任會稽太守、御史大夫，魏初官至司徒、司空，封蘭陵侯。子王肅（字子雍），孫女王元姬適晉文帝司馬昭。《三國志·魏書·王朗傳》有传。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GuGe2l5td2quBD25rGpOkT
          claim_id: c_auelyVmLqyuk-lopWHLERL
          source_id: s__Np5uu8qmUsAKBfZz2x5sZ
          stance: supports
          locator: 三國志·卷十三·王朗傳
          quotation: null
          interpretation_note: 依据《三国志·王朗传》正史原文补录。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PG_eoqgxrH9qWrdUTWQWA9
        subject_person_id: p_3SDBo4j4p9czjqTXkQXsB7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QfrUjSmQ4GsHQFSweEh618
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v54_4T0Qn_gkJczCUqjKvQ
          claim_id: c_PG_eoqgxrH9qWrdUTWQWA9
          source_id: s__Np5uu8qmUsAKBfZz2x5sZ
          stance: supports
          locator: 三國志·卷十三·王朗傳：肅字子雍。…（注：肅父朗與許靖書云肅生於會稽）
          quotation: null
          interpretation_note: 依《三国志·王朗传》：肃为朗之子，正史原文补链。
          source:
            id: s__Np5uu8qmUsAKBfZz2x5sZ
            source_type: website
            title: 维基文库：三國志·卷十三·魏書·王朗傳
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/三國志/卷13
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T00:21:32.314Z
            metadata_json: null
      object_person:
        id: p_QfrUjSmQ4GsHQFSweEh618
        status: active
        display_name: 王肅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朗 (三國)

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朗 (三國) | accepted |
| bio.summary | 王朗，字景興，東海郯人。東漢末、三國魏重臣，歷任會稽太守、御史大夫，魏初官至司徒、司空，封蘭陵侯。子王肅（字子雍），孫女王元姬適晉文帝司馬昭。《三國志·魏書·王朗傳》有传。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QfrUjSmQ4GsHQFSweEh618 | 王肅 | accepted |

## 外部来源

- [维基文库：三國志·卷十三·魏書·王朗傳](https://zh.wikisource.org/wiki/三國志/卷13)
