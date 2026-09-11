---
schema: wang-person/v1
id: p_RV7rHymbjAuMVkCqKsJaax
status: active
merged_into: null
display_name: 王陶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k9TAQDqufvEE4u2myLcGDf
        subject_person_id: p_RV7rHymbjAuMVkCqKsJaax
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MaDDfCUhphFm8gQWNJ59Xq
          claim_id: c_k9TAQDqufvEE4u2myLcGDf
          source_id: s_PcFFvCDJBFd44FuWEkD1A6
          stance: supports
          locator: CBDB:22123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22123）
          source: &a1
            id: s_PcFFvCDJBFd44FuWEkD1A6
            source_type: api_record
            title: 中国历代人物传记资料库：王陶（CBDB 22123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22123&o=json
            external_identifier: CBDB:22123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gkzcvUJQ6wi5gkuaLWM6cG
        subject_person_id: p_RV7rHymbjAuMVkCqKsJaax
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1020年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vjLxGiQB8V3Mhoy9GqAyLb
          claim_id: c_gkzcvUJQ6wi5gkuaLWM6cG
          source_id: s_PcFFvCDJBFd44FuWEkD1A6
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
        id: c_qn65CBkBgRgGuveG4J18Mi
        subject_person_id: p_RV7rHymbjAuMVkCqKsJaax
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1080年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jMVoaGYXNX5r46yf19Dwh5
          claim_id: c_qn65CBkBgRgGuveG4J18Mi
          source_id: s_PcFFvCDJBFd44FuWEkD1A6
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
        id: c_qc4XcfUXoyW1Gh7KT7QSRE
        subject_person_id: p_RV7rHymbjAuMVkCqKsJaax
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陶（1020年—1080年），宋人物。籍贯長社，入仕進士，曾任大理寺丞、殿中省丞、觀文殿學士。（中国历代人物传记资料库 CBDB 22123）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X1y4aedYTtJA305OvAI8cf
          claim_id: c_qc4XcfUXoyW1Gh7KT7QSRE
          source_id: s_PcFFvCDJBFd44FuWEkD1A6
          stance: supports
          locator: CBDB:22123
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KJqFHvASW_6stJZ9IXeStM
        subject_person_id: p_XxbY91RiCBrsB5eVREE1y2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RV7rHymbjAuMVkCqKsJaax
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2QsywowyjVRf9gTSrr_f-I
          claim_id: c_KJqFHvASW_6stJZ9IXeStM
          source_id: s_PcFFvCDJBFd44FuWEkD1A6
          stance: supports
          locator: CBDB 双向互证（父 王應 ⇄ 子 王陶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XxbY91RiCBrsB5eVREE1y2
        status: active
        display_name: 王應
        merged_into_person_id: null
  children:
    - claim:
        id: c_IAqfjJG_ZYKIMadxJdfuA-
        subject_person_id: p_RV7rHymbjAuMVkCqKsJaax
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aFMUYGj8BUSGRCS44jePEP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4q_sfKeRFfRZciK1d5J8vk
          claim_id: c_IAqfjJG_ZYKIMadxJdfuA-
          source_id: s_VxiCZ5UPpF6bQZCpPYLAiy
          stance: supports
          locator: 蘇學士集：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VxiCZ5UPpF6bQZCpPYLAiy
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 99963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=99963&o=json
            external_identifier: CBDB:99963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aFMUYGj8BUSGRCS44jePEP
        status: active
        display_name: 王寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陶 | accepted |
| birth.date | 1020年 | accepted |
| death.date | 1080年 | accepted |
| bio.summary | 王陶（1020年—1080年），宋人物。籍贯長社，入仕進士，曾任大理寺丞、殿中省丞、觀文殿學士。（中国历代人物传记资料库 CBDB 22123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XxbY91RiCBrsB5eVREE1y2 | 王應 | accepted |
| children | p_aFMUYGj8BUSGRCS44jePEP | 王寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 99963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=99963&o=json)
- [中国历代人物传记资料库：王陶（CBDB 22123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22123&o=json)
