---
schema: wang-person/v1
id: p_KwbmAJ2D4cYa2NFwUSg9RA
status: active
merged_into: null
display_name: 王溥
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7tXgJ56HGb4yyiuMwz4xLj
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xobke3ke5PZzoJJcgkCAux
          claim_id: c_7tXgJ56HGb4yyiuMwz4xLj
          source_id: s_TLipBNUT929EerVX3x4LM4
          stance: supports
          locator: CBDB:8152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8152）
          source: &a1
            id: s_TLipBNUT929EerVX3x4LM4
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 8152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8152&o=json
            external_identifier: CBDB:8152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KPy9BQPWvWWfuDNWVAWJCF
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 922年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rX1kJYZ5ef621oPEt4HCJh
          claim_id: c_KPy9BQPWvWWfuDNWVAWJCF
          source_id: s_TLipBNUT929EerVX3x4LM4
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
        id: c_4D5Lz32ZBfgqjhJSos6E55
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 982年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7tMY5xsGyTBrYLj2PP1z6
          claim_id: c_4D5Lz32ZBfgqjhJSos6E55
          source_id: s_TLipBNUT929EerVX3x4LM4
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
        id: c_CoZ83pmd38CJ6C8Cup5Q2J
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
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
        - id: cs_M1xrSJSK7oUcDPNLFBHjsX
          claim_id: c_CoZ83pmd38CJ6C8Cup5Q2J
          source_id: s_TLipBNUT929EerVX3x4LM4
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
        id: c_IXf84VUIPmRLUKOMYOEfNA
        subject_person_id: p_75587XqogBQaW5G74KzAUa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T3erZD3RnetiUi-13Cdslp
          claim_id: c_IXf84VUIPmRLUKOMYOEfNA
          source_id: s_fPj9F5vVSoDjTWHQZskLG1
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1026：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fPj9F5vVSoDjTWHQZskLG1
            source_type: api_record
            title: 中国历代人物传记资料库：王延祚（CBDB 22069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22069&o=json
            external_identifier: CBDB:22069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.816Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_75587XqogBQaW5G74KzAUa
        status: active
        display_name: 王延祚
        merged_into_person_id: null
  children:
    - claim:
        id: c_-Nm-w0p9Tzre2GRXxkT4ER
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dTXH6ubpBbfKsj26LKdQqL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nUH9HR9EXMwPW9m8rZKLfJ
          claim_id: c_-Nm-w0p9Tzre2GRXxkT4ER
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: BasicInfo Notes：父王貽正、祖父王溥
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XY9srzhf4QvcQx3M7SMojE
            source_type: api_record
            title: 中国历代人物传记资料库：王貽永（CBDB 1829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json
            external_identifier: CBDB:1829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dTXH6ubpBbfKsj26LKdQqL
        status: active
        display_name: 王貽正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Muc_2-QUVZCbWEC-02Xp0i
        subject_person_id: p_KwbmAJ2D4cYa2NFwUSg9RA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PHmf79xTwWuj1qPnsJFVAk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0pSPbuuMbicWIbs7b8HH0W
          claim_id: c_Muc_2-QUVZCbWEC-02Xp0i
          source_id: s_6vZqmm2TfAhNawEMnYVp9B
          stance: supports
          locator: CBDB 双向互证（祖父 王溥 ⇄ 孫 王渙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_6vZqmm2TfAhNawEMnYVp9B
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 570907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570907&o=json
            external_identifier: CBDB:570907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PHmf79xTwWuj1qPnsJFVAk
        status: active
        display_name: 王渙
        merged_into_person_id: null
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| birth.date | 922年 | accepted |
| death.date | 982年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_75587XqogBQaW5G74KzAUa | 王延祚 | accepted |
| children | p_dTXH6ubpBbfKsj26LKdQqL | 王貽正 | accepted |
| descendants | p_PHmf79xTwWuj1qPnsJFVAk | 王渙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渙（CBDB 570907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570907&o=json)
- [中国历代人物传记资料库：王溥（CBDB 8152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8152&o=json)
- [中国历代人物传记资料库：王延祚（CBDB 22069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22069&o=json)
- [中国历代人物传记资料库：王貽永（CBDB 1829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json)
