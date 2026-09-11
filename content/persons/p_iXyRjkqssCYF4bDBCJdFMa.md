---
schema: wang-person/v1
id: p_iXyRjkqssCYF4bDBCJdFMa
status: active
merged_into: null
display_name: 王則
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ri7kqxyWDras6g4kopoAuY
        subject_person_id: p_iXyRjkqssCYF4bDBCJdFMa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hR4gNU2baLQ6n9HbUCKGHY
          claim_id: c_Ri7kqxyWDras6g4kopoAuY
          source_id: s_PwwQjNYZpuwhw1fbvpPXSi
          stance: supports
          locator: CBDB:151486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151486）
          source: &a1
            id: s_PwwQjNYZpuwhw1fbvpPXSi
            source_type: api_record
            title: 中国历代人物传记资料库：王則（CBDB 151486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151486&o=json
            external_identifier: CBDB:151486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SP36RsJcHsjc5yZuohQ1Dn
        subject_person_id: p_iXyRjkqssCYF4bDBCJdFMa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則，唐人物。籍贯黎城。（中国历代人物传记资料库 CBDB 151486）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sOKDB6vVoZf5gc3wX-om3V
          claim_id: c_SP36RsJcHsjc5yZuohQ1Dn
          source_id: s_PwwQjNYZpuwhw1fbvpPXSi
          stance: supports
          locator: CBDB:151486
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_C6uuhhuKrEMcAX3IvTj4UJ
        subject_person_id: p_iXyRjkqssCYF4bDBCJdFMa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eqQL1ccr8qFyDd29v6B9ui
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Frw7itXR4SQUvsvJ9sDNAN
          claim_id: c_C6uuhhuKrEMcAX3IvTj4UJ
          source_id: s_dKWFbw4nTEroGpFfAb4Bkd
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 105：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dKWFbw4nTEroGpFfAb4Bkd
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 140379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json
            external_identifier: CBDB:140379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eqQL1ccr8qFyDd29v6B9ui
        status: active
        display_name: 王慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王則 | accepted |
| bio.summary | 王則，唐人物。籍贯黎城。（中国历代人物传记资料库 CBDB 151486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eqQL1ccr8qFyDd29v6B9ui | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 140379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140379&o=json)
- [中国历代人物传记资料库：王則（CBDB 151486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151486&o=json)
