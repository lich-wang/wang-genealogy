---
schema: wang-person/v1
id: p_15zkLYv3q2p9LKJwXkpuD5
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 38089
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fRDigxWJDGeirMkXhWHuov
        subject_person_id: p_15zkLYv3q2p9LKJwXkpuD5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_smjsyaP6xQP5_3mSu6oZGA
          claim_id: c_fRDigxWJDGeirMkXhWHuov
          source_id: s_pr678Fvytrr7_WVVbd76fh
          stance: supports
          locator: CBDB:38089
          quotation: null
          interpretation_note: CBDB 明确记录的王貽永配偶
          source: &a1
            id: s_pr678Fvytrr7_WVVbd76fh
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王貽永妻)（CBDB 38089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38089&o=json
            external_identifier: CBDB:38089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
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
        id: c_Uygs5rgr-eHyoaHVKRfAgI
        subject_person_id: p_15zkLYv3q2p9LKJwXkpuD5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_127UF7yvGqCLXapDi883c4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_90ub2JSEiecMtloIiF2pG5
          claim_id: c_Uygs5rgr-eHyoaHVKRfAgI
          source_id: s_pr678Fvytrr7_WVVbd76fh
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1928;1929：丈夫
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yCZrHOkflcRUAsVyCswZzW
          claim_id: c_Uygs5rgr-eHyoaHVKRfAgI
          source_id: s_oYK2L8opH_MEetMe9PiB4i
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，一二二 王貽永母申氏墓誌：丈夫（太宗皇帝第六女）
          quotation: null
          interpretation_note: 与另一 CBDB 记录同指王貽永之妻，经消歧后合并记录。
          source:
            id: s_oYK2L8opH_MEetMe9PiB4i
            source_type: api_record
            title: 中国历代人物传记资料库：鄭國懿順大長公主（CBDB 691876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691876&o=json
            external_identifier: CBDB:691876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-10T13:33:56.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_127UF7yvGqCLXapDi883c4
        status: active
        display_name: 王貽永
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_127UF7yvGqCLXapDi883c4 | 王貽永 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王貽永妻)（CBDB 38089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38089&o=json)
- [中国历代人物传记资料库：鄭國懿順大長公主（CBDB 691876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691876&o=json)
