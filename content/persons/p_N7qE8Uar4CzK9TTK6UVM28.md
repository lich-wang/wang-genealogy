---
schema: wang-person/v1
id: p_N7qE8Uar4CzK9TTK6UVM28
status: active
merged_into: null
display_name: 王希文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vBfGmJ7XW1EDd3XveA7fKb
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69RqQ1nuVURmvDYnpwRqdi
          claim_id: c_vBfGmJ7XW1EDd3XveA7fKb
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: CBDB:209884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209884）
          source: &a1
            id: s_FrwWZRDBNt6pNGFBizNerf
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 209884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json
            external_identifier: CBDB:209884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_788H9oo1iZdrPbf6C4R922
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
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
        - id: cs_S9NeuGKG1ECHPdxfG5itVp
          claim_id: c_788H9oo1iZdrPbf6C4R922
          source_id: s_FrwWZRDBNt6pNGFBizNerf
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
        id: c_SAq00vkjeQ3LjQdsD9jVkr
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tf_N6S-JbExOFrEBhbss55
          claim_id: c_SAq00vkjeQ3LjQdsD9jVkr
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_ITKQCyz89pS-LlyKL7IKsM
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PeNwc61mxTnzddmv7sBFLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bJeiUuB-9FGIocVQ5Y2K5H
          claim_id: c_ITKQCyz89pS-LlyKL7IKsM
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第九十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PeNwc61mxTnzddmv7sBFLN
        status: active
        display_name: 王延
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希文 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |
| children | p_PeNwc61mxTnzddmv7sBFLN | 王延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希文（CBDB 209884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json)
