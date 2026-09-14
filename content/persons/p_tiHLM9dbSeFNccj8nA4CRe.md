---
schema: wang-person/v1
id: p_tiHLM9dbSeFNccj8nA4CRe
status: active
merged_into: null
display_name: 王拱極
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PdoFjsYebw6AW3np32fegD
        subject_person_id: p_tiHLM9dbSeFNccj8nA4CRe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8pVt11qKUaMSNXPfFxB2iz
          claim_id: c_PdoFjsYebw6AW3np32fegD
          source_id: s_o3NS81oK2qwLTU78Ky3i9g
          stance: supports
          locator: CBDB:227352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227352）
          source: &a1
            id: s_o3NS81oK2qwLTU78Ky3i9g
            source_type: api_record
            title: 中国历代人物传记资料库：王拱極（CBDB 227352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227352&o=json
            external_identifier: CBDB:227352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pBwvuHpKBUixBCMaAfKjVN
        subject_person_id: p_tiHLM9dbSeFNccj8nA4CRe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王拱極，明人物。萬曆丙戌科進士進士，籍贯平湖，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227352）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_agRqFukqJmoGhfwZPxOqiC
          claim_id: c_pBwvuHpKBUixBCMaAfKjVN
          source_id: s_o3NS81oK2qwLTU78Ky3i9g
          stance: supports
          locator: CBDB:227352
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IuKOdj_8eszcEqiykuSVyO
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tiHLM9dbSeFNccj8nA4CRe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgAKx5IJbIZwceZG6lK5iP
          claim_id: c_IuKOdj_8eszcEqiykuSVyO
          source_id: s_KaQNwusWrCF4Ui6EuowUQs
          stance: supports
          locator: CBDB：兄弟 王建中（207082）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王拱極 与 王建中 为同胞（CBDB 记「兄」），王建中 之父／母即 王拱極 之父／母。
          source:
            id: s_KaQNwusWrCF4Ui6EuowUQs
            source_type: api_record
            title: 中国历代人物传记资料库：王拱極（CBDB 227352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227352&o=json
            external_identifier: CBDB:227352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mk7g7S4D3bQEXDd4TQZ87J
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_a3XoTpzCaLLwGvWVTtzX14
        subject_person_id: p_tiHLM9dbSeFNccj8nA4CRe
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_os12cBpwqhE8_tF5fl8rD3
          claim_id: c_a3XoTpzCaLLwGvWVTtzX14
          source_id: s_KaQNwusWrCF4Ui6EuowUQs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207082 王建中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KaQNwusWrCF4Ui6EuowUQs
            source_type: api_record
            title: 中国历代人物传记资料库：王拱極（CBDB 227352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227352&o=json
            external_identifier: CBDB:227352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uu4yjus8EVVwp6m8E5Qav5
        status: active
        display_name: 王建中
        merged_into_person_id: null
---

# 王拱極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱極 | accepted |
| bio.summary | 王拱極，明人物。萬曆丙戌科進士進士，籍贯平湖，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 227352） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mk7g7S4D3bQEXDd4TQZ87J | 王言 | accepted |
| other | p_uu4yjus8EVVwp6m8E5Qav5 | 王建中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱極（CBDB 227352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227352&o=json)
