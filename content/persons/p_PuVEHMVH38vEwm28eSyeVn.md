---
schema: wang-person/v1
id: p_PuVEHMVH38vEwm28eSyeVn
status: active
merged_into: null
display_name: 王欽若
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c3gavNBMXanCA4VUqDRa7J
        subject_person_id: p_PuVEHMVH38vEwm28eSyeVn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽若
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Jbhmjpw44wBRT18FByUz5
          claim_id: c_c3gavNBMXanCA4VUqDRa7J
          source_id: s_97MME8EKADrFKX313yQkgd
          stance: supports
          locator: CBDB:1768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1768）
          source: &a1
            id: s_97MME8EKADrFKX313yQkgd
            source_type: api_record
            title: 中国历代人物传记资料库：王欽若（CBDB 1768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1768&o=json
            external_identifier: CBDB:1768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e3s2ieDkRYg3574iVis78K
        subject_person_id: p_PuVEHMVH38vEwm28eSyeVn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 962年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E4PX8nnM37dxRG5qcRMZdb
          claim_id: c_e3s2ieDkRYg3574iVis78K
          source_id: s_97MME8EKADrFKX313yQkgd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WTMo2a8ApMnxh2GocH97ko
        subject_person_id: p_PuVEHMVH38vEwm28eSyeVn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1025年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HwXfZv6F6WNSbDwVH4ggDq
          claim_id: c_WTMo2a8ApMnxh2GocH97ko
          source_id: s_97MME8EKADrFKX313yQkgd
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
        id: c_2vSwASwVwhKiQMrEdMipuK
        subject_person_id: p_PuVEHMVH38vEwm28eSyeVn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽若（962年—1025年），宋人物。籍贯新喻，入仕進士，曾任門下侍郎、樞密使、知樞密院事。（中国历代人物传记资料库 CBDB 1768）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5pD_1AeZa8NDXNMwAlStxi
          claim_id: c_2vSwASwVwhKiQMrEdMipuK
          source_id: s_97MME8EKADrFKX313yQkgd
          stance: supports
          locator: CBDB:1768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_YwfxemcgE9CwVznhKaQ8JF
        status: active
        display_name: 王仲華
        merged_into_person_id: null
  children:
    - claim:
        id: c__Gs3UFGpgbiIr81v-aEIZv
        subject_person_id: p_PuVEHMVH38vEwm28eSyeVn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PdPVecGbVpygzXrcRgDACe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_0K1xsHZUkpqbKrYOM5cNQx
          claim_id: c__Gs3UFGpgbiIr81v-aEIZv
          source_id: s_kQITv4DvzTuyshs6QY2NdF
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_kQITv4DvzTuyshs6QY2NdF
            source_type: api_record
            title: 中国历代人物传记资料库：王慶之（CBDB 22256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22256&o=json
            external_identifier: CBDB:22256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PdPVecGbVpygzXrcRgDACe
        status: active
        display_name: 王慶之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_PtwxRY3Cxck0YJhVtzgnEG
        subject_person_id: p_8NZNv7f7tQow6sK17omZEp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PuVEHMVH38vEwm28eSyeVn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FKfG0GD2SN-j-zvHCWBN34
          claim_id: c_PtwxRY3Cxck0YJhVtzgnEG
          source_id: s_3PyZyN6h8HcUYRAL73RnY7
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3PyZyN6h8HcUYRAL73RnY7
            source_type: api_record
            title: 中国历代人物传记资料库：王賁（CBDB 38805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38805&o=json
            external_identifier: CBDB:38805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8NZNv7f7tQow6sK17omZEp
        status: active
        display_name: 王賁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王欽若

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽若 | accepted |
| birth.date | 962年 | accepted |
| death.date | 1025年 | accepted |
| bio.summary | 王欽若（962年—1025年），宋人物。籍贯新喻，入仕進士，曾任門下侍郎、樞密使、知樞密院事。（中国历代人物传记资料库 CBDB 1768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YwfxemcgE9CwVznhKaQ8JF | 王仲華 | accepted |
| children | p_PdPVecGbVpygzXrcRgDACe | 王慶之 | accepted |
| ancestors | p_8NZNv7f7tQow6sK17omZEp | 王賁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賁（CBDB 38805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38805&o=json)
- [中国历代人物传记资料库：王欽若（CBDB 1768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1768&o=json)
- [中国历代人物传记资料库：王慶之（CBDB 22256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22256&o=json)
- [中国历代人物传记资料库：王仲華（CBDB 21957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21957&o=json)
