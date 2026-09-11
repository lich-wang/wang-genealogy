---
schema: wang-person/v1
id: p_yL15NSqHjuj7TVQLZ2N4tK
status: active
merged_into: null
display_name: 王訢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5F5EaKMHdHdaZSb5AMcqAW
        subject_person_id: p_yL15NSqHjuj7TVQLZ2N4tK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CNmFQ4Y2wFbgjUvZJGe16z
          claim_id: c_5F5EaKMHdHdaZSb5AMcqAW
          source_id: s_wztH4dRBKX2CpUuvUbZvA4
          stance: supports
          locator: CBDB:23567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23567）
          source: &a1
            id: s_wztH4dRBKX2CpUuvUbZvA4
            source_type: api_record
            title: 中国历代人物传记资料库：王訢（CBDB 23567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23567&o=json
            external_identifier: CBDB:23567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NtMYg4MasQm9VU1gHJQaK3
        subject_person_id: p_yL15NSqHjuj7TVQLZ2N4tK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1118年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4zNcSxABYzVCNGCsfaEDZ
          claim_id: c_NtMYg4MasQm9VU1gHJQaK3
          source_id: s_wztH4dRBKX2CpUuvUbZvA4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDSCGzswF7j5R5MPcezM7K
        subject_person_id: p_yL15NSqHjuj7TVQLZ2N4tK
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
        - id: cs_s29QRAHhTTCL287ZpraKW2
          claim_id: c_EDSCGzswF7j5R5MPcezM7K
          source_id: s_wztH4dRBKX2CpUuvUbZvA4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UC75j5yNzkeR0ozK9v-sl2
        subject_person_id: p_tk84vCkyVEDHdqb4M5upn4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yL15NSqHjuj7TVQLZ2N4tK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0EHkyyB9AYqdtv6eKUYSp
          claim_id: c_UC75j5yNzkeR0ozK9v-sl2
          source_id: s_Pb9tXvKePBR6cCqNC9UMpz
          stance: supports
          locator: CBDB 双向互证（子 王訢 ⇄ 父 王庶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Pb9tXvKePBR6cCqNC9UMpz
            source_type: api_record
            title: 中国历代人物传记资料库：王庶（CBDB 23565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23565&o=json
            external_identifier: CBDB:23565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tk84vCkyVEDHdqb4M5upn4
        status: active
        display_name: 王庶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_WB-XVai_hHlVBDOQkJVINj
        subject_person_id: p_yL15NSqHjuj7TVQLZ2N4tK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gyMfEvDzGzJfcBW7JJ8uuK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jnwoJX5O4yEXnXSCPfIQPN
          claim_id: c_WB-XVai_hHlVBDOQkJVINj
          source_id: s_8eRBWP1sdJO-c3rHG29Obq
          stance: supports
          locator: 紹興十八年同年小錄，92：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8eRBWP1sdJO-c3rHG29Obq
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王訢妻)（CBDB 134787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134787&o=json
            external_identifier: CBDB:134787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gyMfEvDzGzJfcBW7JJ8uuK
        status: active
        display_name: 韓氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王訢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訢 | accepted |
| birth.date | 1118年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tk84vCkyVEDHdqb4M5upn4 | 王庶 | accepted |
| spouses | p_gyMfEvDzGzJfcBW7JJ8uuK | 韓氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王訢妻)（CBDB 134787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134787&o=json)
- [中国历代人物传记资料库：王庶（CBDB 23565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23565&o=json)
- [中国历代人物传记资料库：王訢（CBDB 23567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23567&o=json)
