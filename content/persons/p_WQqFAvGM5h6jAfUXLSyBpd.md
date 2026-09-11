---
schema: wang-person/v1
id: p_WQqFAvGM5h6jAfUXLSyBpd
status: active
merged_into: null
display_name: 吳茂厚
revision: 1
cbdb_id: 338241
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3WUfgyuUy_W5i_RLrgL3LN
        subject_person_id: p_WQqFAvGM5h6jAfUXLSyBpd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳茂厚
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UHCWVYFvVQ3P1AkrlyHLe1
          claim_id: c_3WUfgyuUy_W5i_RLrgL3LN
          source_id: s_Qy4eeU-bJsRw3zxJW9fS1h
          stance: supports
          locator: CBDB:338241
          quotation: null
          interpretation_note: CBDB 明确记录的王觀微配偶
          source: &a1
            id: s_Qy4eeU-bJsRw3zxJW9fS1h
            source_type: api_record
            title: 中国历代人物传记资料库：吳茂厚（CBDB 338241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338241&o=json
            external_identifier: CBDB:338241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6GlWiKv2gP_TtyQOhKGLcF
        subject_person_id: p_3ZtbZhCZFk3EEX4gcnRqtW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WQqFAvGM5h6jAfUXLSyBpd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D3zCYsTFlkUJ0iHzcNDEP2
          claim_id: c_6GlWiKv2gP_TtyQOhKGLcF
          source_id: s_Qy4eeU-bJsRw3zxJW9fS1h
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4969：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3ZtbZhCZFk3EEX4gcnRqtW
        status: active
        display_name: 王觀微
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳茂厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吳茂厚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3ZtbZhCZFk3EEX4gcnRqtW | 王觀微 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳茂厚（CBDB 338241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338241&o=json)
