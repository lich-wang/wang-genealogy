---
schema: wang-person/v1
id: p_qa2o3yUfQDPvHEEyuYSQZ8
status: active
merged_into: null
display_name: 王質
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V2ZMXxy9nv2eK54Aiytz3L
        subject_person_id: p_qa2o3yUfQDPvHEEyuYSQZ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6qvMLu4hJQBh9Qa1mYNdAE
          claim_id: c_V2ZMXxy9nv2eK54Aiytz3L
          source_id: s_7EYtUPHK7Ca2S1YnfzM5mS
          stance: supports
          locator: CBDB:92043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92043）
          source: &a1
            id: s_7EYtUPHK7Ca2S1YnfzM5mS
            source_type: api_record
            title: 中国历代人物传记资料库：王質（CBDB 92043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92043&o=json
            external_identifier: CBDB:92043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kjVbZZREeUqCLU5FFESfFo
        subject_person_id: p_qa2o3yUfQDPvHEEyuYSQZ8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 769年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8uBTYdCuiC7EAHk9NGPJe
          claim_id: c_kjVbZZREeUqCLU5FFESfFo
          source_id: s_7EYtUPHK7Ca2S1YnfzM5mS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cwcRPSY1GhcVDdV2GZ3ZPj
        subject_person_id: p_qa2o3yUfQDPvHEEyuYSQZ8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 836年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vg27LAFfGrq3gsLTDHdrqL
          claim_id: c_cwcRPSY1GhcVDdV2GZ3ZPj
          source_id: s_7EYtUPHK7Ca2S1YnfzM5mS
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
        id: c_sJZTDFDg4wvqnoKA5jMiMG
        subject_person_id: p_qa2o3yUfQDPvHEEyuYSQZ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ftwMGBhz3LLnktDvfzU9S3
          claim_id: c_sJZTDFDg4wvqnoKA5jMiMG
          source_id: s_7EYtUPHK7Ca2S1YnfzM5mS
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
        id: c_dy5zjuDtILoHi3t3pSG-QX
        subject_person_id: p_khvPdLuxtdqrPcCpzKFSF3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qa2o3yUfQDPvHEEyuYSQZ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgJXUCHEoFnBYjG5vHk4C3
          claim_id: c_dy5zjuDtILoHi3t3pSG-QX
          source_id: s_1KxdeggVZCtfXHfFE1dcUD
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1KxdeggVZCtfXHfFE1dcUD
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 189495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189495&o=json
            external_identifier: CBDB:189495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_khvPdLuxtdqrPcCpzKFSF3
        status: active
        display_name: 王潛
        merged_into_person_id: null
  children:
    - claim:
        id: c_S5DEsVol5sc4xmDm5d5z7T
        subject_person_id: p_qa2o3yUfQDPvHEEyuYSQZ8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jTG4g5xLzbJGWgvWMaVQeX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKEZXrIXqNDt2O0M23F0tm
          claim_id: c_S5DEsVol5sc4xmDm5d5z7T
          source_id: s_AMr41Bt1emjNQAK2p2muVT
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AMr41Bt1emjNQAK2p2muVT
            source_type: api_record
            title: 中国历代人物传记资料库：王慶存（CBDB 189494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189494&o=json
            external_identifier: CBDB:189494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jTG4g5xLzbJGWgvWMaVQeX
        status: active
        display_name: 王慶存
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王質 | accepted |
| birth.date | 769年 | accepted |
| death.date | 836年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_khvPdLuxtdqrPcCpzKFSF3 | 王潛 | accepted |
| children | p_jTG4g5xLzbJGWgvWMaVQeX | 王慶存 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潛（CBDB 189495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189495&o=json)
- [中国历代人物传记资料库：王慶存（CBDB 189494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189494&o=json)
- [中国历代人物传记资料库：王質（CBDB 92043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92043&o=json)
