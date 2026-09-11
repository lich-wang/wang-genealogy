---
schema: wang-person/v1
id: p_x7QK6Yqt4A5YCYRDZUuZNJ
status: active
merged_into: null
display_name: 王彭
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NMfN5mLxj94aRHMFxLjKLt
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FwbghTMdPQGT7p2o4UAoMD
          claim_id: c_NMfN5mLxj94aRHMFxLjKLt
          source_id: s_XqoxLrQT9D3emoZFWGvyhK
          stance: supports
          locator: CBDB:571644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571644）
          source: &a1
            id: s_XqoxLrQT9D3emoZFWGvyhK
            source_type: api_record
            title: 中国历代人物传记资料库：王彭（CBDB 571644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571644&o=json
            external_identifier: CBDB:571644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mNJxE596ckbunfiho5ctGW
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1067年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7PUddEAtEMLKwBAjgJ8ur
          claim_id: c_mNJxE596ckbunfiho5ctGW
          source_id: s_XqoxLrQT9D3emoZFWGvyhK
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
        id: c_vqykXpaG4rEY6FUQDw9LB6
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1092年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W8x8dTCdHMqobNs3HNNEmS
          claim_id: c_vqykXpaG4rEY6FUQDw9LB6
          source_id: s_XqoxLrQT9D3emoZFWGvyhK
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
        id: c_DJQL5hZo9SwKqv8E1NrMw6
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彭（1067年—1092年），宋人物。籍贯龍門。（中国历代人物传记资料库 CBDB 571644）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LxoERUJ-_diSGp7uKZFe8o
          claim_id: c_DJQL5hZo9SwKqv8E1NrMw6
          source_id: s_XqoxLrQT9D3emoZFWGvyhK
          stance: supports
          locator: CBDB:571644
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ilGTsBifuUHDu5mIN-d_oL
        subject_person_id: p_Fqahu1Tzm7wuLSu7e9txiu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xUx6_T7uIIcbKMxmuclMsV
          claim_id: c_ilGTsBifuUHDu5mIN-d_oL
          source_id: s_XqoxLrQT9D3emoZFWGvyhK
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Fqahu1Tzm7wuLSu7e9txiu
        status: active
        display_name: 王與安
        merged_into_person_id: null
  children:
    - claim:
        id: c_yikTPtwlp_ZqVOEH27iY8j
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4xaLW5HVRkhKWDimLcBPZZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r_CYb2HLuZD3knRbGjOYLK
          claim_id: c_yikTPtwlp_ZqVOEH27iY8j
          source_id: s_Q7mgxyyorjsQKSgDBmy4iH
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q7mgxyyorjsQKSgDBmy4iH
            source_type: api_record
            title: 中国历代人物传记资料库：王秉（CBDB 571649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571649&o=json
            external_identifier: CBDB:571649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4xaLW5HVRkhKWDimLcBPZZ
        status: active
        display_name: 王秉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_3wOInyvBsDTaGk_qd7GBVB
        subject_person_id: p_x7QK6Yqt4A5YCYRDZUuZNJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_du4iGTiqUG7ZRmoGZJRfQU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__xQF-4rwe2BqMGA5y4ZTG4
          claim_id: c_3wOInyvBsDTaGk_qd7GBVB
          source_id: s_73hHw0bDnXifQmDd3aFeRe
          stance: supports
          locator: 芒洛冢墓遺文，王彭墓志：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_73hHw0bDnXifQmDd3aFeRe
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王彭妻)（CBDB 571648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571648&o=json
            external_identifier: CBDB:571648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_du4iGTiqUG7ZRmoGZJRfQU
        status: active
        display_name: 宋氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王彭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彭 | accepted |
| birth.date | 1067年 | accepted |
| death.date | 1092年 | accepted |
| bio.summary | 王彭（1067年—1092年），宋人物。籍贯龍門。（中国历代人物传记资料库 CBDB 571644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Fqahu1Tzm7wuLSu7e9txiu | 王與安 | accepted |
| children | p_4xaLW5HVRkhKWDimLcBPZZ | 王秉 | accepted |
| spouses | p_du4iGTiqUG7ZRmoGZJRfQU | 宋氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王彭妻)（CBDB 571648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571648&o=json)
- [中国历代人物传记资料库：王秉（CBDB 571649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571649&o=json)
- [中国历代人物传记资料库：王彭（CBDB 571644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571644&o=json)
