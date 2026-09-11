---
schema: wang-person/v1
id: p_uhBvBPtXf315t4tLh9pNU3
status: active
merged_into: null
display_name: 王志慶
cbdb_id: 235162
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KcYHgGhn4G1rWaiEa2XkWf
        subject_person_id: p_uhBvBPtXf315t4tLh9pNU3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志慶，明人物。中国历代人物传记资料库（CBDB）以人物编号 235162 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_KagKRCLiQd2sbCNYG845B-
          claim_id: c_KcYHgGhn4G1rWaiEa2XkWf
          source_id: s_QtEVp6dV5sMtxWaLwqM3V5
          stance: supports
          locator: CBDB:235162
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_QtEVp6dV5sMtxWaLwqM3V5
            source_type: api_record
            title: 中国历代人物传记资料库：王志慶（CBDB 235162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235162&o=json
            external_identifier: CBDB:235162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ULgoDpFfot7CuNXnUDy3zW
        subject_person_id: p_uhBvBPtXf315t4tLh9pNU3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nG15YjRFdNF2dWM6JAEjvS
          claim_id: c_ULgoDpFfot7CuNXnUDy3zW
          source_id: s_QtEVp6dV5sMtxWaLwqM3V5
          stance: supports
          locator: CBDB:235162
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_QtEVp6dV5sMtxWaLwqM3V5
            source_type: api_record
            title: 中国历代人物传记资料库：王志慶（CBDB 235162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235162&o=json
            external_identifier: CBDB:235162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YVwI0_lxX2IkrfNLBuj8ij
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uhBvBPtXf315t4tLh9pNU3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BEd5GFRXCQ2Klv_gL99zMA
          claim_id: c_YVwI0_lxX2IkrfNLBuj8ij
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 江南通志，lgid=65730-65731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kEUVXVMNSjJdG7sCHKLhxA
            source_type: api_record
            title: 中国历代人物传记资料库：王臨亨（CBDB 126852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json
            external_identifier: CBDB:126852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cUEh25oPwuAacU7D2hTAPV
        status: active
        display_name: 王臨亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志慶，明人物。中国历代人物传记资料库（CBDB）以人物编号 235162 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王志慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cUEh25oPwuAacU7D2hTAPV | 王臨亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臨亨（CBDB 126852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json)
- [中国历代人物传记资料库：王志慶（CBDB 235162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235162&o=json)
