---
schema: wang-person/v1
id: p_7n4YRG43tWti51VHd8x868
status: active
merged_into: null
display_name: 王烔
cbdb_id: 283528
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FNpkhSXp936ErxwDbbXVMJ
        subject_person_id: p_7n4YRG43tWti51VHd8x868
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烔，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dRFUyEyULsEdncxmRXwwzW
          claim_id: c_FNpkhSXp936ErxwDbbXVMJ
          source_id: s_h4yMGNrf2DJiNq5mz4hhdN
          stance: supports
          locator: CBDB:283528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_h4yMGNrf2DJiNq5mz4hhdN
            source_type: api_record
            title: 中国历代人物传记资料库：王烔（CBDB 283528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283528&o=json
            external_identifier: CBDB:283528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PMZ4W8TocHBoPcw4hfbuSr
        subject_person_id: p_7n4YRG43tWti51VHd8x868
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5KttG29iEUz5oS6KRTHf4q
          claim_id: c_PMZ4W8TocHBoPcw4hfbuSr
          source_id: s_h4yMGNrf2DJiNq5mz4hhdN
          stance: supports
          locator: CBDB:283528
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W71n87JgjOgMYlWBZ23fFd
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7n4YRG43tWti51VHd8x868
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c-iA1XtHAZrTpFViVmqTpn
          claim_id: c_W71n87JgjOgMYlWBZ23fFd
          source_id: s__mmEBfwmmrLlE0sLsyOtsf
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王烔 与 王煒 为同胞（CBDB 记「兄」），王煒 之父／母即 王烔 之父／母。
          source:
            id: s__mmEBfwmmrLlE0sLsyOtsf
            source_type: api_record
            title: 中国历代人物传记资料库：王烔（CBDB 283528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283528&o=json
            external_identifier: CBDB:283528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y9Be6wCSGkH3WJd1jLBiqu
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eHRLPABeiasKKjuq4pBk4y
        subject_person_id: p_7n4YRG43tWti51VHd8x868
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hlpYJrulM6O8y6ZKmt-M4C
          claim_id: c_eHRLPABeiasKKjuq4pBk4y
          source_id: s__mmEBfwmmrLlE0sLsyOtsf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__mmEBfwmmrLlE0sLsyOtsf
            source_type: api_record
            title: 中国历代人物传记资料库：王烔（CBDB 283528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283528&o=json
            external_identifier: CBDB:283528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9cPpJFUi1d46tFMj2MGDrb
        status: active
        display_name: 王煒
        merged_into_person_id: null
---

# 王烔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王烔，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283528） | accepted |
| name.primary | 王烔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y9Be6wCSGkH3WJd1jLBiqu | 王相 | accepted |
| other | p_9cPpJFUi1d46tFMj2MGDrb | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烔（CBDB 283528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283528&o=json)
