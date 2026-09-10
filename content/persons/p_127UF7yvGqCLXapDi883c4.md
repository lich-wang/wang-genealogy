---
schema: wang-person/v1
id: p_127UF7yvGqCLXapDi883c4
status: active
merged_into: null
display_name: 王貽永
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ySET8JHW5ErHA1BwY9Ymj4
        subject_person_id: p_127UF7yvGqCLXapDi883c4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NqXN2EjnR5r6MQ3LRhKAQs
          claim_id: c_ySET8JHW5ErHA1BwY9Ymj4
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: CBDB:1829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1829）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C91w4dYz6ifbEmJMxrQeh9
        subject_person_id: p_127UF7yvGqCLXapDi883c4
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
        - id: cs_Z3Mh62Veb2f5XzbUT1eApZ
          claim_id: c_C91w4dYz6ifbEmJMxrQeh9
          source_id: s_XY9srzhf4QvcQx3M7SMojE
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
        id: c_LA6uSvW2gM-hWAGss3--AZ
        subject_person_id: p_dTXH6ubpBbfKsj26LKdQqL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_127UF7yvGqCLXapDi883c4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cxj_Gfpmwr3yUtb5e5BF__
          claim_id: c_LA6uSvW2gM-hWAGss3--AZ
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: PersonKinshipInfo：父（王貽正）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dTXH6ubpBbfKsj26LKdQqL
        status: active
        display_name: 王貽正
        merged_into_person_id: null
  children:
    - claim:
        id: c_Xk4HlvpWcBqTojcQ1taJgc
        subject_person_id: p_127UF7yvGqCLXapDi883c4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vgoWcNsg5TJm8CAAjNf5Xr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brXm2tPMCz7IayyxHzkRrM
          claim_id: c_Xk4HlvpWcBqTojcQ1taJgc
          source_id: s_XY9srzhf4QvcQx3M7SMojE
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1966：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vgoWcNsg5TJm8CAAjNf5Xr
        status: active
        display_name: 王道卿
        merged_into_person_id: null
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
          source:
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
        id: p_15zkLYv3q2p9LKJwXkpuD5
        status: active
        display_name: 趙氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王貽永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽永 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dTXH6ubpBbfKsj26LKdQqL | 王貽正 | accepted |
| children | p_vgoWcNsg5TJm8CAAjNf5Xr | 王道卿 | accepted |
| spouses | p_15zkLYv3q2p9LKJwXkpuD5 | 趙氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貽永（CBDB 1829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1829&o=json)
- [中国历代人物传记资料库：趙氏(王貽永妻)（CBDB 38089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38089&o=json)
- [中国历代人物传记资料库：鄭國懿順大長公主（CBDB 691876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691876&o=json)
