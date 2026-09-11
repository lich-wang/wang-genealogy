---
schema: wang-person/v1
id: p_4YbFooAxoUMv2AAUpJ1fu1
status: active
merged_into: null
display_name: 何璉
revision: 1
cbdb_id: 134051
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z_ULFAEiFXkDnQ0HxYKhpV
        subject_person_id: p_4YbFooAxoUMv2AAUpJ1fu1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何璉
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EBVIMxPT6IkOl23y8pYQP0
          claim_id: c_Z_ULFAEiFXkDnQ0HxYKhpV
          source_id: s_8i8k0Rq7Q4eWYta1sppTVP
          stance: supports
          locator: CBDB:134051
          quotation: null
          interpretation_note: CBDB 明确记录的王順配偶
          source: &a1
            id: s_8i8k0Rq7Q4eWYta1sppTVP
            source_type: api_record
            title: 中国历代人物传记资料库：何璉(王順妻)（CBDB 134051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134051&o=json
            external_identifier: CBDB:134051
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
        id: c_xcHg0E6mm57ve2IKKnU-dC
        subject_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4YbFooAxoUMv2AAUpJ1fu1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pwGYt19_R1MY-OmutLz7Eu
          claim_id: c_xcHg0E6mm57ve2IKKnU-dC
          source_id: s_8i8k0Rq7Q4eWYta1sppTVP
          stance: supports
          locator: 宋濂全集，1195：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gwVUKjMQycQaZ6UR2zvJFs
        status: active
        display_name: 王順
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 何璉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gwVUKjMQycQaZ6UR2zvJFs | 王順 | accepted |

## 外部来源

- [中国历代人物传记资料库：何璉(王順妻)（CBDB 134051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134051&o=json)
