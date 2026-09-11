---
schema: wang-person/v1
id: p_ZrVPMZwm7fGRq1QgALGJYj
status: active
merged_into: null
display_name: 王采
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UXRj7ecRS6DrLJ11KBW73R
        subject_person_id: p_ZrVPMZwm7fGRq1QgALGJYj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6HQPhG8RkAiTr1i2L6uaEg
          claim_id: c_UXRj7ecRS6DrLJ11KBW73R
          source_id: s_4j1cy1km4tGC52MrB9xXNd
          stance: supports
          locator: CBDB:30038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30038）
          source: &a1
            id: s_4j1cy1km4tGC52MrB9xXNd
            source_type: api_record
            title: 中国历代人物传记资料库：王采（CBDB 30038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30038&o=json
            external_identifier: CBDB:30038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8mCgtTCsvW2Cs2qLsvuTHD
        subject_person_id: p_ZrVPMZwm7fGRq1QgALGJYj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王采，清人物。籍贯寶坻，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 30038）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f6EYh4I2snBf0l8_6_hCaG
          claim_id: c_8mCgtTCsvW2Cs2qLsvuTHD
          source_id: s_4j1cy1km4tGC52MrB9xXNd
          stance: supports
          locator: CBDB:30038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_McNkgNsf-NT9hgvZpMv3Q2
        subject_person_id: p_ycGgNxfxozdfaZd69tXQfq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZrVPMZwm7fGRq1QgALGJYj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LAGrpsp5XfiF5RCm29AHf
          claim_id: c_McNkgNsf-NT9hgvZpMv3Q2
          source_id: s_4j1cy1km4tGC52MrB9xXNd
          stance: supports
          locator: CBDB 双向互证（父 王乃餘 ⇄ 子 王采）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ycGgNxfxozdfaZd69tXQfq
        status: active
        display_name: 王乃餘
        merged_into_person_id: null
  children:
    - claim:
        id: c_jHpOWe5lqgd8d9ZrHuV_md
        subject_person_id: p_ZrVPMZwm7fGRq1QgALGJYj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tz4YpWKtJXjcMJNGcixnvv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R6NvwnQFFcrmKmd8vpUzMe
          claim_id: c_jHpOWe5lqgd8d9ZrHuV_md
          source_id: s_4j1cy1km4tGC52MrB9xXNd
          stance: supports
          locator: CBDB 双向互证（子 王枚士 ⇄ 父 王采）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Tz4YpWKtJXjcMJNGcixnvv
        status: active
        display_name: 王枚士
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王采 | accepted |
| bio.summary | 王采，清人物。籍贯寶坻，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 30038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ycGgNxfxozdfaZd69tXQfq | 王乃餘 | accepted |
| children | p_Tz4YpWKtJXjcMJNGcixnvv | 王枚士 | accepted |

## 外部来源

- [中国历代人物传记资料库：王采（CBDB 30038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30038&o=json)
