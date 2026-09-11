---
schema: wang-person/v1
id: p_PGU15Ugu5s9NEWpLjgtEC5
status: active
merged_into: null
display_name: 王獻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_exMxY6s225HGryXFTLFjVH
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ru4c2aij3ex7ebpHPc33Bj
          claim_id: c_exMxY6s225HGryXFTLFjVH
          source_id: s_MECmV15hg2YDFZBndvairR
          stance: supports
          locator: CBDB:252946
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252946）
          source: &a1
            id: s_MECmV15hg2YDFZBndvairR
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 252946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252946&o=json
            external_identifier: CBDB:252946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cuC6YRnxL66T93nWUXrqAu
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_36ASf8HxKKm481mgwha5yQ
          claim_id: c_cuC6YRnxL66T93nWUXrqAu
          source_id: s_MECmV15hg2YDFZBndvairR
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
        id: c_iXLkH5UpHZAOAUYGntWKIL
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3sCXvZnf2K3JGPtkmiPk7P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXUlIk2YxCspqKpwzMUiFS
          claim_id: c_iXLkH5UpHZAOAUYGntWKIL
          source_id: s_UbMDK3watKgmMGbKALPCAi
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第二甲第四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UbMDK3watKgmMGbKALPCAi
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 198292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json
            external_identifier: CBDB:198292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3sCXvZnf2K3JGPtkmiPk7P
        status: active
        display_name: 王齊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3sCXvZnf2K3JGPtkmiPk7P | 王齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王齊（CBDB 198292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198292&o=json)
- [中国历代人物传记资料库：王獻（CBDB 252946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252946&o=json)
