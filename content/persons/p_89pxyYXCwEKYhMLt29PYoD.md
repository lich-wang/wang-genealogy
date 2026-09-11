---
schema: wang-person/v1
id: p_89pxyYXCwEKYhMLt29PYoD
status: active
merged_into: null
display_name: 王彬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DFgX23LgkUjdVuswF6qJG
        subject_person_id: p_89pxyYXCwEKYhMLt29PYoD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q2um3bNQZZ3y9ed8Ydw8Kv
          claim_id: c_9DFgX23LgkUjdVuswF6qJG
          source_id: s_7RjS56q2inTQgTRu2wGC13
          stance: supports
          locator: CBDB:1859
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1859）
          source: &a1
            id: s_7RjS56q2inTQgTRu2wGC13
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 1859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1859&o=json
            external_identifier: CBDB:1859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dM5bn6c33S2mzM8Bv9J6WN
        subject_person_id: p_89pxyYXCwEKYhMLt29PYoD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬，宋人物。籍贯長樂，入仕進士，曾任太常寺少卿、路提點刑獄公事、通判。（中国历代人物传记资料库 CBDB 1859）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OOv2yZEPfiIxsZVCc7MONx
          claim_id: c_dM5bn6c33S2mzM8Bv9J6WN
          source_id: s_7RjS56q2inTQgTRu2wGC13
          stance: supports
          locator: CBDB:1859
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lsiYg0VEhxdhbiL7oeM6Fo
        subject_person_id: p_UuFS5vK4ZcVMjE3tF4RFoj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_89pxyYXCwEKYhMLt29PYoD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a4pGu4xoyci31SA4UzDldt
          claim_id: c_lsiYg0VEhxdhbiL7oeM6Fo
          source_id: s_7RjS56q2inTQgTRu2wGC13
          stance: supports
          locator: CBDB 双向互证（父 王仁偘 ⇄ 子 王彬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_UuFS5vK4ZcVMjE3tF4RFoj
        status: active
        display_name: 王仁偘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pnF6OF6u5Q-tqfjNY66Zd0
        subject_person_id: p_TSnLmw5deMhF6ddrkHCq1X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_89pxyYXCwEKYhMLt29PYoD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w5bYJwvQd-1zgueyyAjsr4
          claim_id: c_pnF6OF6u5Q-tqfjNY66Zd0
          source_id: s_7RjS56q2inTQgTRu2wGC13
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TSnLmw5deMhF6ddrkHCq1X
        status: active
        display_name: 王彥英
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_wWh2DjnBVDqUyY8RE8oXqs
        subject_person_id: p_89pxyYXCwEKYhMLt29PYoD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3yGgeYr8AWKKojb6QYWJCJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y6YghOrFUjA2VosA4QQbgO
          claim_id: c_wWh2DjnBVDqUyY8RE8oXqs
          source_id: s_5hiHrRziXJszNvjev39kPB
          stance: supports
          locator: CBDB 双向互证（祖父 王彬 ⇄ 孫 王宗望）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_5hiHrRziXJszNvjev39kPB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 1904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1904&o=json
            external_identifier: CBDB:1904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3yGgeYr8AWKKojb6QYWJCJ
        status: active
        display_name: 王宗望
        merged_into_person_id: null
    - claim:
        id: c_CXEMbikh6durWj-CYwIeSH
        subject_person_id: p_89pxyYXCwEKYhMLt29PYoD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mMMvUVTqSGCzN9tBPNL2KP
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k3FABSA8_eV89aoLv4bX77
          claim_id: c_CXEMbikh6durWj-CYwIeSH
          source_id: s_7RjS56q2inTQgTRu2wGC13
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王南夫 ⇄ 高祖;四世祖 王彬）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_mMMvUVTqSGCzN9tBPNL2KP
        status: active
        display_name: 王南夫
        merged_into_person_id: null
  other: []
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| bio.summary | 王彬，宋人物。籍贯長樂，入仕進士，曾任太常寺少卿、路提點刑獄公事、通判。（中国历代人物传记资料库 CBDB 1859） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UuFS5vK4ZcVMjE3tF4RFoj | 王仁偘 | accepted |
| ancestors | p_TSnLmw5deMhF6ddrkHCq1X | 王彥英 | accepted |
| descendants | p_3yGgeYr8AWKKojb6QYWJCJ | 王宗望 | accepted |
| descendants | p_mMMvUVTqSGCzN9tBPNL2KP | 王南夫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 1859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1859&o=json)
- [中国历代人物传记资料库：王宗望（CBDB 1904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1904&o=json)
