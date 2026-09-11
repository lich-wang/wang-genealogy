---
schema: wang-person/v1
id: p_45sVsGucdcRmogpRJoCZis
status: active
merged_into: null
display_name: 王敬仲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d2eMe5YW6uRkf5yL3Agtwf
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s1cXuRG7FJry4y2LRZjUS4
          claim_id: c_d2eMe5YW6uRkf5yL3Agtwf
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: CBDB:141578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141578）
          source: &a1
            id: s_ejeYaJmbMLDqJz5NGmDtQp
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 141578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json
            external_identifier: CBDB:141578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8SC2F3rEh9JndrLL7eYAWL
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBTCp3mb7yQLfZLLxZwX6M
          claim_id: c_8SC2F3rEh9JndrLL7eYAWL
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
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
        id: c_WNvvCBgLvwhKE1QJEi5aP6
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wACNdMbWcctMst8Q2XfpEe
          claim_id: c_WNvvCBgLvwhKE1QJEi5aP6
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
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
        id: c_Dsap8BG9oNxEUCVPxkjM9V
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬仲（759年—826年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 141578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t6GfFsRPkVaKxow6RE1ySX
          claim_id: c_Dsap8BG9oNxEUCVPxkjM9V
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: CBDB:141578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pUlLiKPMTZ_kfcXBJMs99R
        subject_person_id: p_rotu2Acg5v2fY7wcM2gvir
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_45sVsGucdcRmogpRJoCZis
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BFN9NBVqmo0eyB0BileAvQ
          claim_id: c_pUlLiKPMTZ_kfcXBJMs99R
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rotu2Acg5v2fY7wcM2gvir
        status: active
        display_name: 王英
        merged_into_person_id: null
  children:
    - claim:
        id: c_YzWWfep6jVZkAzvPVsiNzR
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x2hPZFJ1a7sByp4GiwD4A8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oE3prfO6CqW0PMw8bU1uDL
          claim_id: c_YzWWfep6jVZkAzvPVsiNzR
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x2hPZFJ1a7sByp4GiwD4A8
        status: active
        display_name: 王徹
        merged_into_person_id: null
    - claim:
        id: c_QOLG4r1rqmFEBzwMEipm5n
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wnoP8DnUbB11GqtKTpfE7E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYjVKyX288MEuruQAipjpp
          claim_id: c_QOLG4r1rqmFEBzwMEipm5n
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wnoP8DnUbB11GqtKTpfE7E
        status: active
        display_name: 王衢
        merged_into_person_id: null
    - claim:
        id: c_fbWb2ikdMk94wRyODvALKb
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5H7WQXD8JsHHx1Ya8vJJ3m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0VJeOcxSgZKyaGGZIcrPA1
          claim_id: c_fbWb2ikdMk94wRyODvALKb
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5H7WQXD8JsHHx1Ya8vJJ3m
        status: active
        display_name: 王衎
        merged_into_person_id: null
    - claim:
        id: c_JptlETxnwmM8YPPHxV2raX
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wa23QS7VDsuRFQLU4dEUBX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekWonkDzAJ3GbzqviZFtLj
          claim_id: c_JptlETxnwmM8YPPHxV2raX
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wa23QS7VDsuRFQLU4dEUBX
        status: active
        display_name: 王長衎
        merged_into_person_id: null
    - claim:
        id: c_ivEK7HQM2fsRXgYkExWlra
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e4aZcGMSo1EDp2uhHFNjZ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yeXmisMeFxGHvFm1ALDetJ
          claim_id: c_ivEK7HQM2fsRXgYkExWlra
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e4aZcGMSo1EDp2uhHFNjZ4
        status: active
        display_name: 王中徹
        merged_into_person_id: null
    - claim:
        id: c_M31Dnq64jvdg8w0CA1RumL
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wWod2ez1UU8RSHgsFxpJFe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q9KWSIiZqgT2xfTS49FwKU
          claim_id: c_M31Dnq64jvdg8w0CA1RumL
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wWod2ez1UU8RSHgsFxpJFe
        status: active
        display_name: 王小衢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_mlyDFeVHiGfeoXs9Hf1kLm
        subject_person_id: p_45sVsGucdcRmogpRJoCZis
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Qd6AWCK7WL3T8QgcG9THAp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYKqdw61AZTmjLseoB0023
          claim_id: c_mlyDFeVHiGfeoXs9Hf1kLm
          source_id: s_Xof7AfyMpzaXx47HeiZ3Oy
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xof7AfyMpzaXx47HeiZ3Oy
            source_type: api_record
            title: 中国历代人物传记资料库：宇文氏(王敬仲妻)（CBDB 157514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157514&o=json
            external_identifier: CBDB:157514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Qd6AWCK7WL3T8QgcG9THAp
        status: active
        display_name: 宇文氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_zPUAsouu1VbK0dDTFCP5EQ
        subject_person_id: p_iQVDgJFY1pc4NSZHQh5uPw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_45sVsGucdcRmogpRJoCZis
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YH5d8oM_vcarhuRc8sjvGy
          claim_id: c_zPUAsouu1VbK0dDTFCP5EQ
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iQVDgJFY1pc4NSZHQh5uPw
        status: active
        display_name: 王諝
        merged_into_person_id: null
    - claim:
        id: c_BQqhuH-Gnk5td00K8GN5Re
        subject_person_id: p_A39G1FQHHhWai3zdkp4x8V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_45sVsGucdcRmogpRJoCZis
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41SkTGL-OwGabEJ6KHOSGY
          claim_id: c_BQqhuH-Gnk5td00K8GN5Re
          source_id: s_ejeYaJmbMLDqJz5NGmDtQp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Baoli 18：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A39G1FQHHhWai3zdkp4x8V
        status: active
        display_name: 王思旭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王敬仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬仲 | accepted |
| birth.date | 759年 | accepted |
| death.date | 826年 | accepted |
| bio.summary | 王敬仲（759年—826年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 141578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rotu2Acg5v2fY7wcM2gvir | 王英 | accepted |
| children | p_x2hPZFJ1a7sByp4GiwD4A8 | 王徹 | accepted |
| children | p_wnoP8DnUbB11GqtKTpfE7E | 王衢 | accepted |
| children | p_5H7WQXD8JsHHx1Ya8vJJ3m | 王衎 | accepted |
| children | p_wa23QS7VDsuRFQLU4dEUBX | 王長衎 | accepted |
| children | p_e4aZcGMSo1EDp2uhHFNjZ4 | 王中徹 | accepted |
| children | p_wWod2ez1UU8RSHgsFxpJFe | 王小衢 | accepted |
| spouses | p_Qd6AWCK7WL3T8QgcG9THAp | 宇文氏 | accepted |
| ancestors | p_iQVDgJFY1pc4NSZHQh5uPw | 王諝 | accepted |
| ancestors | p_A39G1FQHHhWai3zdkp4x8V | 王思旭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 141578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141578&o=json)
- [中国历代人物传记资料库：宇文氏(王敬仲妻)（CBDB 157514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157514&o=json)
