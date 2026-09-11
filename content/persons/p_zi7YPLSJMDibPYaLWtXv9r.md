---
schema: wang-person/v1
id: p_zi7YPLSJMDibPYaLWtXv9r
status: active
merged_into: null
display_name: 王銓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4gRvP3G9Z8b3ckmDyKp28
        subject_person_id: p_zi7YPLSJMDibPYaLWtXv9r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EQ6EoS2tmHrzsfGiDBAAys
          claim_id: c_d4gRvP3G9Z8b3ckmDyKp28
          source_id: s_kK46QBvjiHAk6d2jB2uh29
          stance: supports
          locator: CBDB:227725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227725）
          source: &a1
            id: s_kK46QBvjiHAk6d2jB2uh29
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 227725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227725&o=json
            external_identifier: CBDB:227725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qrVvthQ8Z41UdC9DNbhQr7
        subject_person_id: p_zi7YPLSJMDibPYaLWtXv9r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銓，明人物。萬曆丙戌科進士進士，籍贯蒙陰。（中国历代人物传记资料库 CBDB 227725）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fovkvC5i0XDkcZOsOWGWfL
          claim_id: c_qrVvthQ8Z41UdC9DNbhQr7
          source_id: s_kK46QBvjiHAk6d2jB2uh29
          stance: supports
          locator: CBDB:227725
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rakhC6GOT_NkZ49NZdkir4
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zi7YPLSJMDibPYaLWtXv9r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lmHQZh43qZfCi5sDbcXLL6
          claim_id: c_rakhC6GOT_NkZ49NZdkir4
          source_id: s_kK46QBvjiHAk6d2jB2uh29
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銓 | accepted |
| bio.summary | 王銓，明人物。萬曆丙戌科進士進士，籍贯蒙陰。（中国历代人物传记资料库 CBDB 227725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銓（CBDB 227725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227725&o=json)
