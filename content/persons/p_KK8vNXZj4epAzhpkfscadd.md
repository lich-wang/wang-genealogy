---
schema: wang-person/v1
id: p_KK8vNXZj4epAzhpkfscadd
status: active
merged_into: null
display_name: 王士珪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fUhvqF6NL94i6mTH9U6776
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eRic4rKx4vhUC4DsyD4vWF
          claim_id: c_fUhvqF6NL94i6mTH9U6776
          source_id: s_aj2bpvK3RYzoft4W5D6CQJ
          stance: supports
          locator: CBDB:570980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570980）
          source: &a1
            id: s_aj2bpvK3RYzoft4W5D6CQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王士珪（CBDB 570980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570980&o=json
            external_identifier: CBDB:570980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2WB7hjk2nATwiHMQLhxD1e
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9MHon71Tv5nUUTynARp5E1
          claim_id: c_2WB7hjk2nATwiHMQLhxD1e
          source_id: s_aj2bpvK3RYzoft4W5D6CQJ
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
        id: c_OC7sYBIMOvCRtbwYYuVzfI
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RhPMiCQ64PUE69yrKWyQSy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i27bSwLlVoodcGczVc60WG
          claim_id: c_OC7sYBIMOvCRtbwYYuVzfI
          source_id: s_aj2bpvK3RYzoft4W5D6CQJ
          stance: supports
          locator: 紹興府志:八十卷，lgid=316871：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RhPMiCQ64PUE69yrKWyQSy
        status: active
        display_name: 王家祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_7WDlhZy10HFptApcmI10YA
        subject_person_id: p_KK8vNXZj4epAzhpkfscadd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bqEoSPF37A64nsJ8LA87oR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C4CdUOW_-Zt1jCpvfKFsGv
          claim_id: c_7WDlhZy10HFptApcmI10YA
          source_id: s_Ng32YVz7D2uzMtquofEcqw
          stance: supports
          locator: 紹興府志:八十卷，lgid=316871：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ng32YVz7D2uzMtquofEcqw
            source_type: api_record
            title: 中国历代人物传记资料库：王德新（CBDB 570986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570986&o=json
            external_identifier: CBDB:570986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bqEoSPF37A64nsJ8LA87oR
        status: active
        display_name: 王德新
        merged_into_person_id: null
  other: []
---

# 王士珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士珪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RhPMiCQ64PUE69yrKWyQSy | 王家祚 | accepted |
| descendants | p_bqEoSPF37A64nsJ8LA87oR | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德新（CBDB 570986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570986&o=json)
- [中国历代人物传记资料库：王士珪（CBDB 570980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570980&o=json)
