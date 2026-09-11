---
schema: wang-person/v1
id: p_Jes5f5Kh67Z67c3E4f6FNQ
status: active
merged_into: null
display_name: 王倩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_StPN2g6ZkbRoV9XcCZYKcD
        subject_person_id: p_Jes5f5Kh67Z67c3E4f6FNQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z3jmZzsFRS5Yu9W9ts6sYR
          claim_id: c_StPN2g6ZkbRoV9XcCZYKcD
          source_id: s_DYPxGoiHNWJnVN1Jj6HDAU
          stance: supports
          locator: CBDB:194513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194513）
          source: &a1
            id: s_DYPxGoiHNWJnVN1Jj6HDAU
            source_type: api_record
            title: 中国历代人物传记资料库：王倩（CBDB 194513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194513&o=json
            external_identifier: CBDB:194513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.451Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yCgqtzKFDZ1S5p4zrBqENA
        subject_person_id: p_Jes5f5Kh67Z67c3E4f6FNQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 761年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D1qJPWnAUSBFk9FxCLaDmq
          claim_id: c_yCgqtzKFDZ1S5p4zrBqENA
          source_id: s_DYPxGoiHNWJnVN1Jj6HDAU
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
        id: c_EBwPfNJRiZo8K4z6i6KG2P
        subject_person_id: p_Jes5f5Kh67Z67c3E4f6FNQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倩（卒于761年），唐人物。籍贯長安，曾任縣尉。（中国历代人物传记资料库 CBDB 194513）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qtzcxBRO1F89f-311yAA0E
          claim_id: c_EBwPfNJRiZo8K4z6i6KG2P
          source_id: s_DYPxGoiHNWJnVN1Jj6HDAU
          stance: supports
          locator: CBDB:194513
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PoGpM0cuPWh8b4ItxmzoIU
        subject_person_id: p_wJ58Y9Wr78iMTkY7FA1Zzf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jes5f5Kh67Z67c3E4f6FNQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZSsWUoV_Hb259soRrbHBp
          claim_id: c_PoGpM0cuPWh8b4ItxmzoIU
          source_id: s_DYPxGoiHNWJnVN1Jj6HDAU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wJ58Y9Wr78iMTkY7FA1Zzf
        status: active
        display_name: 王堰
        merged_into_person_id: null
  children:
    - claim:
        id: c_bhgQUjjx3QmRtt1KzHTTA5
        subject_person_id: p_Jes5f5Kh67Z67c3E4f6FNQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BphiRB1rQnM8AK6CrBfD3c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Al5EiiMDqtqgbmp5bhp2hG
          claim_id: c_bhgQUjjx3QmRtt1KzHTTA5
          source_id: s_D4da3zKEcUJwBoozcr87Lj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D4da3zKEcUJwBoozcr87Lj
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 194512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194512&o=json
            external_identifier: CBDB:194512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.450Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BphiRB1rQnM8AK6CrBfD3c
        status: active
        display_name: 王曾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王倩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倩 | accepted |
| death.date | 761年 | accepted |
| bio.summary | 王倩（卒于761年），唐人物。籍贯長安，曾任縣尉。（中国历代人物传记资料库 CBDB 194513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJ58Y9Wr78iMTkY7FA1Zzf | 王堰 | accepted |
| children | p_BphiRB1rQnM8AK6CrBfD3c | 王曾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 194512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194512&o=json)
- [中国历代人物传记资料库：王倩（CBDB 194513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194513&o=json)
