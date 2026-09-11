---
schema: wang-person/v1
id: p_qTHZVE85zKMHBCYt3CAjW2
status: active
merged_into: null
display_name: 王鎔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tnj5WQNh39mwYTEbDKvQ4f
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x9wxFJn8VXCczKJVPKP2pJ
          claim_id: c_tnj5WQNh39mwYTEbDKvQ4f
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
          stance: supports
          locator: CBDB:92111
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92111）
          source: &a1
            id: s_VdJ8ABfSKq3J5M323rRp5R
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 92111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92111&o=json
            external_identifier: CBDB:92111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JsVsEQeCYaNUkeaiVBF3Mz
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 874年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y8vjmJYJPJANK3rHFzyjPE
          claim_id: c_JsVsEQeCYaNUkeaiVBF3Mz
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
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
        id: c_L3Lg29hmDSJseBE2WmGpbm
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 921年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cA1skuDHq4qiPr8vX1ov3w
          claim_id: c_L3Lg29hmDSJseBE2WmGpbm
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
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
        id: c_51nEMSQU93enU8k9zaQW7f
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔（874年—921年），唐人物。籍贯真定，曾任大都督府長史、工部尚書、節度留後。（中国历代人物传记资料库 CBDB 92111）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wTvAH55H6ns_2CgbvH-1oX
          claim_id: c_51nEMSQU93enU8k9zaQW7f
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
          stance: supports
          locator: CBDB:92111
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-dfBIkJSBFNIl8H-ZqtIPH
        subject_person_id: p_kk5sE8tUMGDNiS98Q9q7LN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gz0VbuYfcs1hQH4BxxX9UU
          claim_id: c_-dfBIkJSBFNIl8H-ZqtIPH
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kk5sE8tUMGDNiS98Q9q7LN
        status: active
        display_name: 王景崇
        merged_into_person_id: null
  children:
    - claim:
        id: c_UTVy1GBbrd6_8UPdjszTpd
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rxhNRdF7LRvYtsrGVcpWii
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xOAhBtzBmj6FB-5Vwg71ON
          claim_id: c_UTVy1GBbrd6_8UPdjszTpd
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rxhNRdF7LRvYtsrGVcpWii
        status: active
        display_name: 王昭祚
        merged_into_person_id: null
    - claim:
        id: c_i96_bp4Z5lsdQZhFoGI3hS
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pebpi3PGKLwZ11MfeomHpy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3enwSmLhLIy9AI2MBy2-ax
          claim_id: c_i96_bp4Z5lsdQZhFoGI3hS
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pebpi3PGKLwZ11MfeomHpy
        status: active
        display_name: 王昭誨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎔 | accepted |
| birth.date | 874年 | accepted |
| death.date | 921年 | accepted |
| bio.summary | 王鎔（874年—921年），唐人物。籍贯真定，曾任大都督府長史、工部尚書、節度留後。（中国历代人物传记资料库 CBDB 92111） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kk5sE8tUMGDNiS98Q9q7LN | 王景崇 | accepted |
| children | p_rxhNRdF7LRvYtsrGVcpWii | 王昭祚 | accepted |
| children | p_pebpi3PGKLwZ11MfeomHpy | 王昭誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎔（CBDB 92111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92111&o=json)
