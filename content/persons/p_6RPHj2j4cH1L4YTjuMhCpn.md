---
schema: wang-person/v1
id: p_6RPHj2j4cH1L4YTjuMhCpn
status: active
merged_into: null
display_name: 王起
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R79cFcaWB6NFgNUWbiPX5D
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UELLznzbL9GcH4GwyMjmt5
          claim_id: c_R79cFcaWB6NFgNUWbiPX5D
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: CBDB:92061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92061）
          source: &a1
            id: s_QZUQfDNG45gtkNvmB8J354
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 92061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json
            external_identifier: CBDB:92061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hyY3jRJv6EezGv6TevLHb4
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 760年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xU42Y2Bb5M1k75LBTWQYGL
          claim_id: c_hyY3jRJv6EezGv6TevLHb4
          source_id: s_QZUQfDNG45gtkNvmB8J354
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
        id: c_9QoG89tBFufjFTdE5knBus
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 847年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TB4fZ2JmhvsEhSiJ3Xq8dv
          claim_id: c_9QoG89tBFufjFTdE5knBus
          source_id: s_QZUQfDNG45gtkNvmB8J354
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
        id: c_TaS8HFGgMtVEnX5kyTm6cx
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起（760年—847年），唐人物。籍贯太原，身份为工於文，入仕進士，曾任比部郎中、兵部尚書、兵部侍郎。（中国历代人物传记资料库 CBDB 92061）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_56ZukDHM3Pi6OJ3qa7E_a-
          claim_id: c_TaS8HFGgMtVEnX5kyTm6cx
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: CBDB:92061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qc0G9b0U9hdcctYO7sX_08
        subject_person_id: p_6YDDamD31FqdZsDuahyiXX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j9ya77Tohvpr9ZTIuXQ7Hv
          claim_id: c_qc0G9b0U9hdcctYO7sX_08
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6YDDamD31FqdZsDuahyiXX
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children:
    - claim:
        id: c_0d4YuQkjz3rnxTmrm17Kt1
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KUNGD7CVY3yb4qq55PK8zi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NS6CA5_QTHXEVut3FLI1uw
          claim_id: c_0d4YuQkjz3rnxTmrm17Kt1
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: Pers DB / 唐代人物知識ベース，pers00137：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KUNGD7CVY3yb4qq55PK8zi
        status: active
        display_name: 王龜
        merged_into_person_id: null
    - claim:
        id: c_q3qVuD6PruG1VHHf2zaTb6
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eReJ1uLz4wXetehw7XVZ4d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sm_PBpraqNPsqSb5STzdRg
          claim_id: c_q3qVuD6PruG1VHHf2zaTb6
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eReJ1uLz4wXetehw7XVZ4d
        status: active
        display_name: 王鐐
        merged_into_person_id: null
    - claim:
        id: c_NYUBLQzJBQD0v9sBeDCyM7
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgiyoFBBnsgxjzMG2fDeCU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ypGMGR1vCe7qWB4ybw8bTT
          claim_id: c_NYUBLQzJBQD0v9sBeDCyM7
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgiyoFBBnsgxjzMG2fDeCU
        status: active
        display_name: 王式
        merged_into_person_id: null
    - claim:
        id: c_2m3Hb9_0S3ik4hzXTiy5-r
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JyQEqHYoQpEFEvojfsp6Dp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xHDaru8je7Qw-tbJTllbJh
          claim_id: c_2m3Hb9_0S3ik4hzXTiy5-r
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JyQEqHYoQpEFEvojfsp6Dp
        status: active
        display_name: 王鑄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起 | accepted |
| birth.date | 760年 | accepted |
| death.date | 847年 | accepted |
| bio.summary | 王起（760年—847年），唐人物。籍贯太原，身份为工於文，入仕進士，曾任比部郎中、兵部尚書、兵部侍郎。（中国历代人物传记资料库 CBDB 92061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6YDDamD31FqdZsDuahyiXX | 王恕 | accepted |
| children | p_KUNGD7CVY3yb4qq55PK8zi | 王龜 | accepted |
| children | p_eReJ1uLz4wXetehw7XVZ4d | 王鐐 | accepted |
| children | p_HgiyoFBBnsgxjzMG2fDeCU | 王式 | accepted |
| children | p_JyQEqHYoQpEFEvojfsp6Dp | 王鑄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起（CBDB 92061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json)
