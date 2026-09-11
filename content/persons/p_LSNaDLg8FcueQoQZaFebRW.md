---
schema: wang-person/v1
id: p_LSNaDLg8FcueQoQZaFebRW
status: active
merged_into: null
display_name: 王玄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SF6JLbjtUJbxuBjVLDnu5s
        subject_person_id: p_LSNaDLg8FcueQoQZaFebRW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_osfkoP4BAyjw7aBsDA7t93
          claim_id: c_SF6JLbjtUJbxuBjVLDnu5s
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
          stance: supports
          locator: CBDB:139635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139635）
          source: &a1
            id: s_FisE7AAYkKUkQpkyCKX9xg
            source_type: api_record
            title: 中国历代人物传记资料库：王玄（CBDB 139635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139635&o=json
            external_identifier: CBDB:139635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_62L123QSfqy9C54FZ6EXfV
        subject_person_id: p_LSNaDLg8FcueQoQZaFebRW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_byoQUHG1T2NDz8qr6goXLH
          claim_id: c_62L123QSfqy9C54FZ6EXfV
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
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
        id: c_SFfXX45X8F2ED47R8iQL35
        subject_person_id: p_LSNaDLg8FcueQoQZaFebRW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dw2LBTHBF6j8us3YFayVRr
          claim_id: c_SFfXX45X8F2ED47R8iQL35
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
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
        id: c_dAXs1hXdGiBMduqK6ePPgZ
        subject_person_id: p_LSNaDLg8FcueQoQZaFebRW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄（624年—672年），唐人物。籍贯北市，曾任上柱國、縣令。（中国历代人物传记资料库 CBDB 139635）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kQW-Py69UkvnyOeHui5A2g
          claim_id: c_dAXs1hXdGiBMduqK6ePPgZ
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
          stance: supports
          locator: CBDB:139635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2qoSdN0G3UD-1v3pMM_80X
        subject_person_id: p_vrWR9soQCVR5MqQmmtCKU7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSNaDLg8FcueQoQZaFebRW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GsxsEXxOauxI8t8K0QXp9Y
          claim_id: c_2qoSdN0G3UD-1v3pMM_80X
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 56：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vrWR9soQCVR5MqQmmtCKU7
        status: active
        display_name: 王君德
        merged_into_person_id: null
  children:
    - claim:
        id: c_cmoLr53-x7RYcQGbT9IT5H
        subject_person_id: p_LSNaDLg8FcueQoQZaFebRW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U5XKJheya9AFpCv5NsWEe9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xj7XwfvYuGUl4Lb4XF-D2O
          claim_id: c_cmoLr53-x7RYcQGbT9IT5H
          source_id: s_FisE7AAYkKUkQpkyCKX9xg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianheng 56：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U5XKJheya9AFpCv5NsWEe9
        status: active
        display_name: 王阿八
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄 | accepted |
| birth.date | 624年 | accepted |
| death.date | 672年 | accepted |
| bio.summary | 王玄（624年—672年），唐人物。籍贯北市，曾任上柱國、縣令。（中国历代人物传记资料库 CBDB 139635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vrWR9soQCVR5MqQmmtCKU7 | 王君德 | accepted |
| children | p_U5XKJheya9AFpCv5NsWEe9 | 王阿八 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玄（CBDB 139635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139635&o=json)
