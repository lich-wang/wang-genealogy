---
schema: wang-person/v1
id: p_XxbY91RiCBrsB5eVREE1y2
status: active
merged_into: null
display_name: 王應
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G73Gyoziz2zvHFurPbi2R2
        subject_person_id: p_XxbY91RiCBrsB5eVREE1y2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C4cU3CGN4WDMM9jBvTNVxp
          claim_id: c_G73Gyoziz2zvHFurPbi2R2
          source_id: s_XPXFbZVPm77Te39rVNFAvx
          stance: supports
          locator: CBDB:22122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22122）
          source: &a1
            id: s_XPXFbZVPm77Te39rVNFAvx
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 22122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22122&o=json
            external_identifier: CBDB:22122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bXwkhV7GxDfrRsoWuNjyQb
        subject_person_id: p_XxbY91RiCBrsB5eVREE1y2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應，宋人物。籍贯長安，入仕封贈。（中国历代人物传记资料库 CBDB 22122）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KUSw8TIpylxadZf366VRED
          claim_id: c_bXwkhV7GxDfrRsoWuNjyQb
          source_id: s_XPXFbZVPm77Te39rVNFAvx
          stance: supports
          locator: CBDB:22122
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YWDy5OsHO4gqO7B3Si0Dkz
        subject_person_id: p_5q7M5NN4tHZhLCPj7eAQaC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XxbY91RiCBrsB5eVREE1y2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QM-bCV-eLKdPEkV4F89P8M
          claim_id: c_YWDy5OsHO4gqO7B3Si0Dkz
          source_id: s_FxbqjtC8FFMoRqn6HpFi6i
          stance: supports
          locator: CBDB 双向互证（子 王應 ⇄ 父 王誨）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_FxbqjtC8FFMoRqn6HpFi6i
            source_type: api_record
            title: 中国历代人物传记资料库：王誨（CBDB 22121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22121&o=json
            external_identifier: CBDB:22121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5q7M5NN4tHZhLCPj7eAQaC
        status: active
        display_name: 王誨
        merged_into_person_id: null
  children:
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
          source:
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
      object_person:
        id: p_RV7rHymbjAuMVkCqKsJaax
        status: active
        display_name: 王陶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應 | accepted |
| bio.summary | 王應，宋人物。籍贯長安，入仕封贈。（中国历代人物传记资料库 CBDB 22122） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5q7M5NN4tHZhLCPj7eAQaC | 王誨 | accepted |
| children | p_RV7rHymbjAuMVkCqKsJaax | 王陶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誨（CBDB 22121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22121&o=json)
- [中国历代人物传记资料库：王陶（CBDB 22123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22123&o=json)
- [中国历代人物传记资料库：王應（CBDB 22122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22122&o=json)
