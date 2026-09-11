---
schema: wang-person/v1
id: p_YwfxemcgE9CwVznhKaQ8JF
status: active
merged_into: null
display_name: 王仲華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8p7GMmXRVqaHkWce4NNrX4
        subject_person_id: p_YwfxemcgE9CwVznhKaQ8JF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hUuNdCZXZ9CUXNSkAgv4XK
          claim_id: c_8p7GMmXRVqaHkWce4NNrX4
          source_id: s_BBgaX9sKcGA6uZvCh2YJ1x
          stance: supports
          locator: CBDB:21957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21957）
          source: &a1
            id: s_BBgaX9sKcGA6uZvCh2YJ1x
            source_type: api_record
            title: 中国历代人物传记资料库：王仲華（CBDB 21957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21957&o=json
            external_identifier: CBDB:21957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWJZpSBCs9SEsVEeuLC21o
        subject_person_id: p_YwfxemcgE9CwVznhKaQ8JF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲華，南唐人物。籍贯新喻，入仕正奏名諸科(不含明經、明法)。（中国历代人物传记资料库 CBDB 21957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mQsrzydSiP-s2kCG7G_tB0
          claim_id: c_KWJZpSBCs9SEsVEeuLC21o
          source_id: s_BBgaX9sKcGA6uZvCh2YJ1x
          stance: supports
          locator: CBDB:21957
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uSYicbX_UBKKllsmUxd3Fb
        subject_person_id: p_ASPW873g2imRFDHsyu1eA9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YwfxemcgE9CwVznhKaQ8JF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kgLus3HpiDYFRY1ZDMNfeb
          claim_id: c_uSYicbX_UBKKllsmUxd3Fb
          source_id: s_f6q5tvg1JCt8JgDCNRLgQK
          stance: supports
          locator: CBDB 双向互证（子 王仲華 ⇄ 父 王郁）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_f6q5tvg1JCt8JgDCNRLgQK
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 21956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21956&o=json
            external_identifier: CBDB:21956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ASPW873g2imRFDHsyu1eA9
        status: active
        display_name: 王郁
        merged_into_person_id: null
  children:
    - claim:
        id: c_WKUBkigE9nTdGBqyL7ZxpS
        subject_person_id: p_YwfxemcgE9CwVznhKaQ8JF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PuVEHMVH38vEwm28eSyeVn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cAQH-06ggIXv0ovniFEhT3
          claim_id: c_WKUBkigE9nTdGBqyL7ZxpS
          source_id: s_BBgaX9sKcGA6uZvCh2YJ1x
          stance: supports
          locator: CBDB 双向互证（子 王欽若 ⇄ 父 王仲華）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_PuVEHMVH38vEwm28eSyeVn
        status: active
        display_name: 王欽若
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲華 | accepted |
| bio.summary | 王仲華，南唐人物。籍贯新喻，入仕正奏名諸科(不含明經、明法)。（中国历代人物传记资料库 CBDB 21957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ASPW873g2imRFDHsyu1eA9 | 王郁 | accepted |
| children | p_PuVEHMVH38vEwm28eSyeVn | 王欽若 | accepted |

## 外部来源

- [中国历代人物传记资料库：王郁（CBDB 21956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21956&o=json)
- [中国历代人物传记资料库：王仲華（CBDB 21957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21957&o=json)
