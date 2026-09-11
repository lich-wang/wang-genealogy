---
schema: wang-person/v1
id: p_LKzDYAPDmX1Dcm3kwWWk7w
status: active
merged_into: null
display_name: 王九言
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3bGb64eiAn71JHkFKVBgF6
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_515TdBgDC9FQ8qHnA23MVa
          claim_id: c_3bGb64eiAn71JHkFKVBgF6
          source_id: s_f79VU2Zmc9SybDfJBzaqYL
          stance: supports
          locator: CBDB:696905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696905）
          source: &a1
            id: s_f79VU2Zmc9SybDfJBzaqYL
            source_type: api_record
            title: 中国历代人物传记资料库：王九言（CBDB 696905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696905&o=json
            external_identifier: CBDB:696905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EqrUuHuttHpEne1K2MH3qW
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1021年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CGKgftaA7S6vvnY6EQVHk9
          claim_id: c_EqrUuHuttHpEne1K2MH3qW
          source_id: s_f79VU2Zmc9SybDfJBzaqYL
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
        id: c_GzCxoAdauzeTKkeFHMsNbN
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v4RcFjL6hmuWDjhQnphugN
          claim_id: c_GzCxoAdauzeTKkeFHMsNbN
          source_id: s_f79VU2Zmc9SybDfJBzaqYL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_po21id6_4q80KmzAHogFON
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5RBiZ6FFWAyKXQ4ceyXGgd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ephCCOpZ16nWnG8j_LyTBt
          claim_id: c_po21id6_4q80KmzAHogFON
          source_id: s_yFkRvNoqVCR1E6mAvPZevM
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yFkRvNoqVCR1E6mAvPZevM
            source_type: api_record
            title: 中国历代人物传记资料库：王正民（CBDB 697006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697006&o=json
            external_identifier: CBDB:697006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5RBiZ6FFWAyKXQ4ceyXGgd
        status: active
        display_name: 王正民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_6iycsBcuCO9ebXORzcMgj0
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1aEwesssoYpd2ncPJ3YUoM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y0efAvZ6Su2ps2JYapqq3R
          claim_id: c_6iycsBcuCO9ebXORzcMgj0
          source_id: s_EXpKZDXoRYAsnN6Gr8cjoj
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source:
            id: s_EXpKZDXoRYAsnN6Gr8cjoj
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 697034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697034&o=json
            external_identifier: CBDB:697034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1aEwesssoYpd2ncPJ3YUoM
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_zGNsnsKfE-wyV4KVhBvzBS
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6wji7XXP8uK32dWKaW53BU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hu4IKSSHDP3XY33T7fXJfw
          claim_id: c_zGNsnsKfE-wyV4KVhBvzBS
          source_id: s_UxXRV4P69kkv1dkQGV764d
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UxXRV4P69kkv1dkQGV764d
            source_type: api_record
            title: 中国历代人物传记资料库：王洵（CBDB 697040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697040&o=json
            external_identifier: CBDB:697040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6wji7XXP8uK32dWKaW53BU
        status: active
        display_name: 王洵
        merged_into_person_id: null
    - claim:
        id: c_8c4yehLPJbHs0IPmfR8G8o
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6x2bqhUrScPeQEfMXQdYP2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YmDaSq-pvrBf5AAp8Zyc8
          claim_id: c_8c4yehLPJbHs0IPmfR8G8o
          source_id: s_DHVfmGS6GaLxNDM679KKEF
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DHVfmGS6GaLxNDM679KKEF
            source_type: api_record
            title: 中国历代人物传记资料库：王況（CBDB 697042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697042&o=json
            external_identifier: CBDB:697042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6x2bqhUrScPeQEfMXQdYP2
        status: active
        display_name: 王況
        merged_into_person_id: null
    - claim:
        id: c_1RYjEIf8-PWtXGT3stmQUe
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9zhS2yU1nHdZZvcPpv2NJM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQ26WkCLV2NgwhBv62jZjy
          claim_id: c_1RYjEIf8-PWtXGT3stmQUe
          source_id: s_thk77d8ByQCJmegimMVSeY
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_thk77d8ByQCJmegimMVSeY
            source_type: api_record
            title: 中国历代人物传记资料库：王渥（CBDB 697043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697043&o=json
            external_identifier: CBDB:697043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9zhS2yU1nHdZZvcPpv2NJM
        status: active
        display_name: 王渥
        merged_into_person_id: null
  other: []
---

# 王九言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九言 | accepted |
| death.date | 1021年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5RBiZ6FFWAyKXQ4ceyXGgd | 王正民 | accepted |
| descendants | p_1aEwesssoYpd2ncPJ3YUoM | 王淇 | accepted |
| descendants | p_6wji7XXP8uK32dWKaW53BU | 王洵 | accepted |
| descendants | p_6x2bqhUrScPeQEfMXQdYP2 | 王況 | accepted |
| descendants | p_9zhS2yU1nHdZZvcPpv2NJM | 王渥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九言（CBDB 696905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696905&o=json)
- [中国历代人物传记资料库：王況（CBDB 697042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697042&o=json)
- [中国历代人物传记资料库：王淇（CBDB 697034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697034&o=json)
- [中国历代人物传记资料库：王渥（CBDB 697043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697043&o=json)
- [中国历代人物传记资料库：王洵（CBDB 697040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697040&o=json)
- [中国历代人物传记资料库：王正民（CBDB 697006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697006&o=json)
